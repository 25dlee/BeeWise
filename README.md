# BeeWise

## 1. Background
Due to the increasing influence of social media companies, news outlets have often become more focused on their ability to catch one’s attention with aggressive and unsupported claims. In doing so, they damage the validity of their reporting, and many would argue that this is a necessary tradeoff to maintain interest in current news.

What if the excitement around news could be generated to promote an approach of diversifying one's viewpoints and looking at issues through a broader lens? **We believe it can**, and we have done so with our app, **BeeWise**. Using gamified news content, the user is rewarded by taking a more complete path to attaining their own thoughts and opinions on prominent news stories.

**GitHub repository**: [https://github.com/25dlee/HackDuke25](https://github.com/25dlee/BeeWise)

**Motivation behind this project includes**:
- Disinformation in news sources
- Need for a fun, engaging way to track reading habits and share learning
- Growing interest in “eco-awareness,” “bee conservation,” or any relevant cause

---

## 2. What It Does
- **Crawls relevant news sources** for current significant topics.
- **Provides articles** from left-leaning, right-leaning, and central perspectives.
- **Uses advanced AI** to classify biases objectively within the articles.
- **Tracks user reading activity** and awards points for each article read, offering bonus points when exploring multiple viewpoints on an issue.
- **Displays a point leaderboard** with friends for friendly competition.
- **Shows a user profile** with earned badges for:
  - Total points
  - Total articles read
  - Completing missions

---

## 3. Tech Stack

### Data
- **Goose3** to webscrape news articles (e.g., CNN, AP, and Fox News).
- **OpenAI’s Swarm framework** for sentiment analysis, political leaning classification, and AI summary.

### Backend
- **AWS S3** for data storage.

### Frontend
- **React** with JavaScript, HTML, CSS.

---

## 4. Challenges
One of our biggest challenges was deciding on a project that leveraged gamified learning for social good. After discussing with one of the Code for Good mentors (shoutout **Sahithi Meduri**!), we decided on **BeeWise**—focusing on using gamification to increase information literacy and prevent echo chambers.

Another challenge was choosing a tech stack. Each team member brought different skills:
- **Pierce**: web scraping and scripting
- **Aidan**: Java and game development
- **Dasol**: Java and UI/UX design
- **Kelly**: full-stack web development and UI/UX design

### Other challenges in development
- Implementing shared global state for user points and badges  
- Designing a clean, responsive UI in React  
- Ensuring data from S3/JSON endpoints loaded correctly  
- Handling authentication or user-specific data (if applicable)

---

## 5. Accomplishments
- **Smooth user experience and design**
- **Efficient data fetching and rendering**
- **Real-time point updates** across Home, SocialPage, and UserProfilePage
- **Unique user badges** (e.g., “Bee aware”) and dynamic leaderboards

---

## 6. Learning
- **Planning** can take a long time but saves time in development.
- Sometimes work is done best with multiple people around the computer for **sanity checks**.
- Not knowing a piece of the tech stack doesn’t mean you **can’t contribute**.
- How to **effectively delegate tasks**.
- How to implement **React Context** for shared state.
- **AI Agents** work best when given extremely specific procedures and roles.
- Becoming more **well-versed with managing Git** workflow on a team.

---

## 7. What’s Next for BeeWise
- Adding more badges or achievements for diverse topics (e.g., environmental, social, economic).
- Integrating more APIs for additional news sources or fact-checking.
- Implementing **user authentication** to store personal reading history across sessions.
- Deploying the project for **public access** (e.g., Netlify, Heroku, or a custom domain).
