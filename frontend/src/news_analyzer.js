/***********************************
 * news_analyzer.js
 ***********************************/

// We'll store the articles in a global array, similar to your "calls" array
let articles = [];

// The S3 JSON location:
const S3_JSON_URL =
  "https://hackduke.s3.us-east-1.amazonaws.com/main_database/Trump+Tarrifs.json"; 
// ^^^^^ Replace with your actual S3 URL for the JSON shown in the question
// e.g. https://hackduke.s3.us-east-1.amazonaws.com/main_database/BLAH.json

/**
 * 1. Fetch data from S3
 *    (Similar to your getCallsFromS3)
 */
function getArticlesFromS3() {
  return new Promise((resolve, reject) => {
    fetch(S3_JSON_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error fetching data from S3 JSON", error);
        reject(error);
      });
  });
}

/**
 * 2. Main function to fetch data & update HTML
 *    (Similar to your updateCallDataFromLocal)
 */
function updateArticleDataFromS3() {
  getArticlesFromS3()
    .then((fetchedData) => {
      // 'fetchedData' has the form:
      // {
      //   "CNN": { title, content, url },
      //   "Fox": { title, content, url },
      //   "AP":  { title, content, url }
      //   ...
      // }

      // Convert that object into an ARRAY of articles for easier processing:
      articles = [];
      for (let sourceKey in fetchedData) {
        let item = fetchedData[sourceKey];
        articles.push({
          source: sourceKey,
          title: item.title || "",
          content: item.content || "",
          url: item.url || "#",
        });
      }

      // 2.1. Analyze or manipulate 'articles' as needed
      // For example, we can highlight articles that mention "Trump" more than 5 times, or something else.

      // 2.2. Display them in the UI
      displayArticles(articles);

      // 2.3. Show total count
      document.getElementById("total-articles").innerText = articles.length;

      // 2.4. Perform any additional analysis
      performAnalysis(articles);
    })
    .catch((err) => {
      console.error("Error loading articles from S3 JSON:", err);
    });
}

/**
 * 3. Display articles in the #article-container
 *    (Similar to how you do tableBody.innerHTML with calls)
 */
function displayArticles(articleArray) {
  const container = document.getElementById("article-container");
  container.innerHTML = ""; // clear old content

  articleArray.forEach((article, index) => {
    const articleDiv = document.createElement("div");
    articleDiv.style.border = "1px solid #ccc";
    articleDiv.style.margin = "0.5rem 0";
    articleDiv.style.padding = "0.5rem";

    articleDiv.innerHTML = `
      <div class="article-source">[Source: ${article.source}]</div>
      <div class="article-title">${article.title}</div>
      <div class="article-content">${article.content}</div>
      <div>
        <a href="${article.url}" target="_blank">Read More</a>
      </div>
      <button onclick="removeArticleRow(${index})">Remove</button>
    `;
    container.appendChild(articleDiv);
  });
}

/**
 * 4. Remove an article from the array + re-render
 *    (Similar to removeCallRow)
 */
function removeArticleRow(index) {
  const confirmed = confirm("Are you sure you want to remove this article?");
  if (confirmed) {
    articles.splice(index, 1);
    updateArticleData(); // re-render with updated array
    alert("Article removed successfully");
  }
}

/**
 * 5. Re-render the articles (similar to 'updateCallData')
 *    This does NOT re-fetch from S3. It just re-displays the array in memory.
 */
function updateArticleData() {
  displayArticles(articles);
  document.getElementById("total-articles").innerText = articles.length;

  // If you want to do advanced grouping or sorting, do it here:
  performAnalysis(articles);
}

/**
 * 6. Example Analysis:
 *    Count total mentions of "Trump" across all articles, and display in #analysis-container
 */
function performAnalysis(articleArray) {
  let totalTrumpMentions = 0;

  articleArray.forEach((art) => {
    // Quick check: count occurrences of "Trump" (case-insensitive)
    // This is a naive approach that splits on spaces / punctuation
    // For real analysis, you'd want a more robust parsing
    const words = art.content.split(/\s+/);
    const trumpCount = words.reduce((count, w) => {
      return w.toLowerCase().includes("trump") ? count + 1 : count;
    }, 0);

    totalTrumpMentions += trumpCount;
  });

  // Show result:
  const analysisContainer = document.getElementById("analysis-container");
  analysisContainer.innerHTML = `
    <p><strong>Analysis:</strong> Found the word "Trump" <em>${totalTrumpMentions}</em> times in all articles.</p>
  `;
}

/**
 * 7. Automatic refresh logic, if desired
 *    You can run `updateArticleDataFromS3()` every 30 seconds, etc.
 *    For now, let's just call it once on page load.
 */
updateArticleDataFromS3();

// If you want repeated fetching, uncomment:
// setInterval(updateArticleDataFromS3, 30000); // every 30 seconds