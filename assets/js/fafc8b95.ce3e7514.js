"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>A});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),A=i,g=d["".concat(s,".").concat(A)]||d[A]||c[A]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function A(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={date:"2023-10-19T09:00",slug:"deploy-an-intelligent-app-on-azure-container-apps-2",title:"3-2. Deploy an Intelligent App on Azure Container Apps (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS).",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,l={permalink:"/Cloud-Native/30DaysOfIA/deploy-an-intelligent-app-on-azure-container-apps-2",source:"@site/blog-30daysofIA/2023-10-17/deploy-an-intelligent-app-on-azure-container-apps-2.md",title:"3-2. Deploy an Intelligent App on Azure Container Apps (2)",description:"Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS).",date:"2023-10-19T09:00:00.000Z",formattedDate:"October 19, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:8.135,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-10-19T09:00",slug:"deploy-an-intelligent-app-on-azure-container-apps-2",title:"3-2. Deploy an Intelligent App on Azure Container Apps (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS).",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},prevItem:{title:"3.3 Taking Intelligent Apps to the Next Level - Implementing Advanced Features with Azure Machine Learning (1)",permalink:"/Cloud-Native/30DaysOfIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-1"},nextItem:{title:"3-1. Deploy an Intelligent App on Azure Container Apps (1)",permalink:"/Cloud-Native/30DaysOfIA/deploy-an-intelligent-app-on-azure-container-apps-1"}},s={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Deploy an Intelligent App on Azure Container Apps with Azure AI (2)",id:"deploy-an-intelligent-app-on-azure-container-apps-with-azure-ai-2",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building the Intelligent App",id:"building-the-intelligent-app",level:2},{value:"Using Your Intelligent App to Analyze User Feedback",id:"using-your-intelligent-app-to-analyze-user-feedback",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Exercise",id:"exercise",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/deploy-an-intelligent-app-on-azure-container-apps-2"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"Build Intelligent Apps!| Build AI Apps On Azure"}),(0,i.kt)("meta",{property:"og:description",content:"Create a user feedback analysis application by setting up an Azure environment to deploy and manage the app using Azure Container Apps and Azure AI"}),(0,i.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/deploy-an-intelligent-app-on-azure-container-apps-2"}),(0,i.kt)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.kt)("meta",{name:"twitter:description",content:"3-2. Create a user feedback analysis application by setting up an Azure environment to deploy and manage the app using Azure Container Apps and Azure AI."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/deploy-an-intelligent-app-on-azure-container-apps-2"})),(0,i.kt)("p",null,"In this article, explore how to create a user feedback analysis application by setting up an Azure environment to deploy and manage the app using ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/container-apps/?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Apps")," and ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/ai-services/?WT.mc_id=javascript-99907-ninarasi"},"Azure AI"),"."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Building and containerizing the intelligent app "),(0,i.kt)("li",{parentName:"ul"},"Analysing user feedback")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of intelligent apps on Azure Container Apps with Azure AI",src:n(93456).Z,width:"625",height:"380"})),(0,i.kt)("h2",{id:"deploy-an-intelligent-app-on-azure-container-apps-with-azure-ai-2"},"Deploy an Intelligent App on Azure Container Apps with Azure AI (2)"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30DaysOfIA/deploy-an-intelligent-app-on-azure-container-apps-1"},"first part of this article"),", we explored the concepts of Azure Container Apps and Azure AI, setup an Azure environment to deploy an intelligent app on Azure Container Apps as well as designed the intelligent app."),(0,i.kt)("p",null,"This article is a continuation to now build the intelligent app, containerize it and analyse user feedback."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow this tutorial, ensure you have read through the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30DaysOfIA/deploy-an-intelligent-app-on-azure-container-apps-1"},"first")," part of this topic."),(0,i.kt)("h2",{id:"building-the-intelligent-app"},"Building the Intelligent App"),(0,i.kt)("p",null,"Now that we\u2019ve set up our basic application, let\u2019s add some intelligence to it. Our initial step involves adding two NuGet packages: ",(0,i.kt)("inlineCode",{parentName:"p"},"Azure.AI.TextAnalytics")," for granting access to Azure AI and ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Extensions.Azure")," for seamlessly injecting the SDK."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Azure.AI.TextAnalytics NuGet packages",src:n(36500).Z,width:"624",height:"143"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Microsoft.Extensions.Azure NuGet package",src:n(43406).Z,width:"624",height:"117"})),(0,i.kt)("p",null,"Next, we need to register our text analytics client for dependency injection into our application. Before we can do that, the Text Analytics client requires two secrets: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An endpoint address"),(0,i.kt)("li",{parentName:"ul"},"An access key")),(0,i.kt)("p",null,"We need to add these into both our development and production environments. In both environments, ",(0,i.kt)("inlineCode",{parentName:"p"},"AI_EndPoint")," is the endpoint variable name while ",(0,i.kt)("inlineCode",{parentName:"p"},"AI_Key")," is the access key variable name."),(0,i.kt)("p",null,"To add these two items to your development environment, right-click on your project and select ",(0,i.kt)("strong",{parentName:"p"},"Manage User Secrets"),". Next, open your Publish profile, click the three dots ( \u2026 ) next to Hosting, and select ",(0,i.kt)("strong",{parentName:"p"},"Manage container app settings")," to verify that these variables are accessible within your container. Finally, you can add these secrets to your Azure container."),(0,i.kt)("p",null,"Now, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file and modify the section where we initialize the database context to include the text analytics initialization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'if (builder.Environment.IsDevelopment())\n{ \n    builder.Services.AddDbContext<DatabaseContext>(options =>\n        options.UseSqlServer(builder.Configuration["userfeedbackdatabaseconnection"]));\n\n\n    builder.Services.AddAzureClients(clientBuilder =>\n        clientBuilder.AddTextAnalyticsClient(new Uri(builder.Configuration["AI_EndPoint"]),\n        new Azure.AzureKeyCredential(builder.Configuration["AI_Key"])) \n        ); \n} \nelse \n{\n    builder.Services.AddDbContext<DatabaseContext>(options => \n        options.UseSqlServer(Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING"))); \n\n    builder.Services.AddAzureClients(clientBuilder => \n        clientBuilder.AddTextAnalyticsClient(new Uri(builder.Configuration["AI_EndPoint"]), \n        new Azure.AzureKeyCredential(builder.Configuration["AI_Key"])) \n        );\n}\n')),(0,i.kt)("p",null,"Finally, let\u2019s configure our ",(0,i.kt)("inlineCode",{parentName:"p"},"Review Create")," method to retrieve sentiment analysis results from the Azure AI services API. To do this, add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Review")," controller constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private readonly TextAnalyticsClient _textClient;\n\n        public ReviewsController(DatabaseContext context, TextAnalyticsClient textClient)\n        { \n            _context = context;\n            _textClient = textClient;\n        } \n")),(0,i.kt)("p",null,"Then, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"POST Create Action")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Reviews")," controller to incorporate a call to the Azure AI services API for analyzing the review text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'        [HttpPost]\n        [ValidateAntiForgeryToken]\n        public async Task<IActionResult> Create([Bind("Id,ProductId,ProductName,ReviewText,PostDate,Sentiment,PositiveValue,NeutralValue,NegativeValue")] Review review) \n        {\n            var selectedProductId = int.Parse(HttpContext.Request.Form["Products"].ToString());\n            var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == selectedProductId);\n\n            var sentimentResult = await _textClient.AnalyzeSentimentAsync(review.ReviewText);\n\n            review.ProductId = selectedProductId;\n            review.ProductName = product.Name;\n            review.PostDate = DateTime.Now.ToString("yyyy-MM-dd");\n            review.Sentiment = sentimentResult.Value.Sentiment.ToString();\n            review.PositiveValue = (float)sentimentResult.Value.ConfidenceScores.Positive;\n            review.NeutralValue = (float)sentimentResult.Value.ConfidenceScores.Neutral;\n            review.NegativeValue = (float)sentimentResult.Value.ConfidenceScores.Negative;\n\u202f \n            _context.Add(review);\n            await _context.SaveChangesAsync();\n            return RedirectToAction(nameof(Index));\n        } \n')),(0,i.kt)("p",null,"In this tutorial, we use the simpler ",(0,i.kt)("inlineCode",{parentName:"p"},"AnalyzeSentimentAsync")," method. It takes our review text and produces an overall sentiment analysis, assigning positive, neutral, and negative scores."),(0,i.kt)("p",null,"Azure\u2019s text analytics service also supports ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/quickstart?tabs=macos&pivots=programming-language-csharp"},"opinion mining"),", a more advanced use case. Opinion mining goes beyond the basics, providing sentiment analysis for specific subjects or keywords within a text."),(0,i.kt)("p",null,"For instance, if a review reads, \u201cThis was a really good product, but the delivery times were way too long. I also had a hard time understanding the manual,\u201d the opinion mining option might break this into distinct subjects and offer sentiment analysis for each:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u201cProduct\u201d with a sentiment of positive"),(0,i.kt)("li",{parentName:"ul"},"\u201cDelivery time\u201d with a sentiment of negative"),(0,i.kt)("li",{parentName:"ul"},"\u201cManual\u201d with a sentiment of negative")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Watch the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/Build-IA/LearnLive/?WT.mc_id=javascript-99907-ninarasi"},"on-demand Learn Live serverless series")," that deconstructs a reference architecture for building intelligent apps using Azure Container Apps and Azure AI.")),(0,i.kt)("h2",{id:"using-your-intelligent-app-to-analyze-user-feedback"},"Using Your Intelligent App to Analyze User Feedback"),(0,i.kt)("p",null,"Now that we have our AI connected to our application, let\u2019s create a review and see what the AI responds with."),(0,i.kt)("p",null,"Run the application, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Reviews/Create")," folder to create a review, and click ",(0,i.kt)("strong",{parentName:"p"},"Submit"),". Select ",(0,i.kt)("strong",{parentName:"p"},"Clippers & Trimmers")," from the drop-down and write: \u201cThis was a really good trimmer for cutting my hair, but it gets caught in my beard.\u201d"),(0,i.kt)("p",null,"Upon inspecting the review you just posted, you\u2019ll notice that Azure AI scored it as positive, albeit with slightly negative and neutral components."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of review index",src:n(56766).Z,width:"624",height:"315"})),(0,i.kt)("p",null,"Now, try another review. This time, select the ",(0,i.kt)("strong",{parentName:"p"},"Headphones")," product from the drop-down and write the following review: \u201cThese headphones were passable. The foam on the outside was not thick enough and can hurt your head. The price is really cheap.\u201d"),(0,i.kt)("p",null,"This time, the AI scores the review as negative, with no positive score and a slight neutral score."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of review index after a second review",src:n(12605).Z,width:"624",height:"193"})),(0,i.kt)("p",null,"By incorporating this AI-based scoring, you gain insights into customer feedback trends and can initiate specific actions based on positive or negative feedback. For example, we might want to understand how our product reviews have performed over the last seven days. Let\u2019s update our review list page to present the average reviews during that period."),(0,i.kt)("p",null,"To achieve this, we\u2019ll navigate to the ",(0,i.kt)("strong",{parentName:"p"},"ReviewContoller")," and summarize our data to display on the ",(0,i.kt)("strong",{parentName:"p"},"Index")," page. Then, we\u2019ll load our products and reviews from the database, iterate through them, and average them over eight days (including the current day). Finally, we\u2019ll compile the summarized data in a list and create a table based on the list."),(0,i.kt)("p",null,"Begin by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"SentimentTrends")," model (a cut-down version of our review data) with this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace UserFeedbackApp.Models\n{ \n    public class SentimentTrends\n    { \n        public int Id { get; set; }\n        public string ProductName { get; set; }\n        public float PositiveValue { get; set; }\n        public float NeutralValue { get; set; }\n        public float NegativeValue { get; set; }\n     public string PostDate { get; set; }\n    }\n} \n")),(0,i.kt)("p",null,"Next, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index")," method in our ",(0,i.kt)("inlineCode",{parentName:"p"},"ReviewController")," file using the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public async Task<IActionResult> Index()\n{ \n    var reviewList = await _context.Reviews.ToListAsync();\n    var productList = await _context.Products.ToListAsync();\n\u202f \n    List<SentimentTrends> trends = new List<SentimentTrends>();\n\n    foreach(var product in productList)\n    { \n         var productReviews = reviewList\n        .Where(d => d.ProductId == product.Id)\n        .Where(d => DateTime.ParseExact(d.PostDate, "yyyy-MM-dd", CultureInfo.InvariantCulture) >= (DateTime.Now.AddDays(-8)))\n        .ToList();\n\n        if (productReviews.Count() > 0)\n        { \n\n            float positiveValue = 0;\n            float neutralValue = 0;\n            float negativeValue = 0;\n\n            foreach (var review in productReviews) \n            {\n                 positiveValue += review.PositiveValue;\n                 neutralValue += review.NeutralValue;\n                 negativeValue += review.NegativeValue;\n            }\n\n             positiveValue = (float)Math.Round(positiveValue / productReviews.Count(), 2);\n             neutralValue = (float)Math.Round(neutralValue / productReviews.Count(), 2);\n             negativeValue = (float)Math.Round(negativeValue / productReviews.Count(), 2);\n\n             SentimentTrends trend = new SentimentTrends();\n\n             trend.Id = productReviews.First().ProductId;\n             trend.ProductName = productReviews.First().ProductName;\n             trend.PostDate = DateTime.Now.AddDays(-8).ToString("yyyy-MM-dd");\n             trend.PositiveValue = positiveValue;\n             trend.NeutralValue = neutralValue;\n             trend.NegativeValue = negativeValue;\n\n             trends.Add(trend);\n        } \n    } \n\n    ViewBag.Trends = trends;\n    return reviewList != null ?\n            View(reviewList) :\n            Problem("Entity set \'DatabaseContext.Reviews\'  is null.");\n} \n')),(0,i.kt)("p",null,"This code filters our recent reviews, averages them by the number of reviews received, and creates the list before passing it to the view in the ",(0,i.kt)("strong",{parentName:"p"},"ViewBag"),". To display this data, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," file in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Reviews")," folder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' <h2>Seven Day Trend</h2> \n<table class="table"> \n    <thead>\n        <tr>\n            <th>Product ID</th>\n            <th>Product Name</th>\n            <th>Positive</th>\n            <th>Neutral</th>\n            <th>Negative</th>\n        </tr>\n    </thead>\n    <tbody>\n        @foreach (SentimentTrends item in ViewBag.trends) \n        {\n        <tr>\n              <td>@item.Id</td>\n              <td>@item.ProductName</td>\n              <td>@item.PositiveValue</td>\n              <td>@item.NeutralValue</td>\n              <td>@item.NegativeValue</td>\n        </tr>\n        }\n    </tbody>\n</table>\n')),(0,i.kt)("p",null,"This displays our data in a simple table on our reviews page. If we run our code now and navigate to the reviews page, we\u2019ll see the table at the top of the page. Averaging product sentiments this way offers valuable insights into potential product issues based on real user feedback."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of the table on the reviews page",src:n(189).Z,width:"624",height:"279"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Intelligent Apps can add more data and insights into your applications, opening possibilities for even more functionality."),(0,i.kt)("p",null,"In this two-part article, we built a simple web application using ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/container-apps/overview?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Apps"),". Then, we incorporated sentiment analysis through Azure AI, extending our application\u2019s capabilities to analyze user feedback. This application architecture on Azure enables seamless scalability for both the application and the AI components. This automatic scalability ensures your application can efficiently meet rising demands and scale back down when that demand subsides."),(0,i.kt)("p",null,"However, sentiment analysis is just one small component of the entire Azure AI suite. Azure AI includes several AI-driven APIs using pre-built models, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Language understanding for translation, question answering, or conversational language comprehension"),(0,i.kt)("li",{parentName:"ul"},"Image processing for image recognition or image and video analysis"),(0,i.kt)("li",{parentName:"ul"},"Speech processing, including speech-to-text, text-to-speech, or speech translation"),(0,i.kt)("li",{parentName:"ul"},"Anomaly detection, offensive content detection, and personalization")),(0,i.kt)("p",null,"Begin your journey into ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services?WT.mc_id=javascript-99907-ninarasi"},"Intelligent Apps with Azure"),", then delve into the next topic to learn how to level up your Intelligent Apps."),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete this ",(0,i.kt)("strong",{parentName:"li"},"hands-on sample")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Building-Your-First-Intelligent-App-with-Azure-Cognitive-Services/tree/main/Microsoft_Series_2_Code/Source%20-%20Article%207%20%2B%208/UserFeedbackApp/Models"},"project code")," to build your intelligent app with multi-modal databases."),(0,i.kt)("li",{parentName:"ul"},"Complete the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://aka.ms/fallforIA/apps-csc"},"Intelligent apps Cloud Skills Challenge"))," to build on your app dev and AI skills."),(0,i.kt)("li",{parentName:"ul"},"Register for ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://reactor.microsoft.com/en-us/reactor/events/20728/?WT.mc_id=javascript-99907-ninarasi"},"Ask the Expert: Azure Container Apps"))," session for live Q&A with the Product Engineering team on building intelligent apps using Azure Container Apps.")))}c.isMDXComponent=!0},93456:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-2-1-b52ec09f06a71193fa12ed00f3d705f8.jpeg"},36500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-2-2-88a3173622d39531cf0ab694532a4b37.jpeg"},43406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-2-3-f63ba92b7296ca78b0050aa207e3f30a.gif"},56766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-2-4-0a724f68825d9ee1da2169806c0d72bf.jpeg"},12605:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/gif;base64,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"},189:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-2-6-052f8819c4e4dafc1c66ced2798fd771.gif"}}]);