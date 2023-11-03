"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={date:"2023-10-19T09:02",slug:"taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2",title:"3-4. Taking Intelligent Apps to the Next Level - Implementing Advanced Features with Azure Machine Learning (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore how to level up your Intelligent Apps by training a custom model using your own dataset with Azure Machine Learning and Azure Container Apps.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,l={permalink:"/Cloud-Native/30DaysOfIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2",source:"@site/blog-30daysofIA/2023-10-19/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2.md",title:"3-4. Taking Intelligent Apps to the Next Level - Implementing Advanced Features with Azure Machine Learning (2)",description:"Explore how to level up your Intelligent Apps by training a custom model using your own dataset with Azure Machine Learning and Azure Container Apps.",date:"2023-10-19T09:02:00.000Z",formattedDate:"October 19, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:13.145,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-10-19T09:02",slug:"taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2",title:"3-4. Taking Intelligent Apps to the Next Level - Implementing Advanced Features with Azure Machine Learning (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore how to level up your Intelligent Apps by training a custom model using your own dataset with Azure Machine Learning and Azure Container Apps.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},prevItem:{title:"4-1. Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (1)",permalink:"/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1"},nextItem:{title:"3-3. Taking Intelligent Apps to the Next Level - Implementing Advanced Features with Azure Machine Learning (1)",permalink:"/Cloud-Native/30DaysOfIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-1"}},s={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Taking Intelligent Apps to the Next Level: Implementing Advanced Features with Azure Machine Learning (2)",id:"taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Testing and Validating the ML Model with the Intelligent App",id:"testing-and-validating-the-ml-model-with-the-intelligent-app",level:3},{value:"Integrating the Machine Learning Model into Your App",id:"integrating-the-machine-learning-model-into-your-app",level:3},{value:"Testing and Validating the Enhanced Intelligent App",id:"testing-and-validating-the-enhanced-intelligent-app",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Exercise",id:"exercise",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"Build Intelligent Apps!| Build AI Apps On Azure"}),(0,i.kt)("meta",{property:"og:description",content:"Explore how to level up your Intelligent Apps by training a custom model using your own dataset with Azure Machine Learning and Azure Container Apps."}),(0,i.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2"}),(0,i.kt)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.kt)("meta",{name:"twitter:description",content:"3.4 Taking Intelligent Apps to the Next Level: Implementing Advanced Features with Azure Machine Learning-2."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2"})),(0,i.kt)("p",null,"In this article, continue to explore how to level up your Intelligent Apps by training a custom model using your own dataset with Azure Machine Learning and Azure Container Apps."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Testing and validating the ML model with the intelligent app "),(0,i.kt)("li",{parentName:"ul"},"Integrating the Machine Learning Model into the intelligent app"),(0,i.kt)("li",{parentName:"ul"},"Testing and validating the enhanced intelligent app ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Azure learning center and intelligent apps",src:n(5578).Z,width:"625",height:"380"})),(0,i.kt)("h2",{id:"taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-2"},"Taking Intelligent Apps to the Next Level: Implementing Advanced Features with Azure Machine Learning (2)"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30DaysOfIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-1"},"previous part")," of this tutorial, we explored creating Azure Machine Learning workspace and training the machine learning model. This part continues onto integrating the ML model into the app, and then testing and validating the enhanced intelligent app to get better results from the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview?tabs=prebuilt?WT.mc_id=javascript-99907-ninarasi"},"Azure AI Sentiment Analysis API"),"."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow this tutorial, ensure you have completed the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30DaysOfIA/taking-intelligent-apps-to-the-next-level-implementing-advanced-features-with-azure-machine-learning-1"},"first")," part of this topic."),(0,i.kt)("h3",{id:"testing-and-validating-the-ml-model-with-the-intelligent-app"},"Testing and Validating the ML Model with the Intelligent App"),(0,i.kt)("p",null,"Next, we need to register our model for use with a managed endpoint. To do so, click on the ",(0,i.kt)("strong",{parentName:"p"},"Models")," menu item to view a list of models in your environment."),(0,i.kt)("p",null,"If you didn\u2019t train your model or prefer a pre-built one, unzip the example model file into its own directory and select ",(0,i.kt)("strong",{parentName:"p"},"From local files"),". Ensure the model type is ",(0,i.kt)("strong",{parentName:"p"},"MLflow"),", which matches the type of model we trained."),(0,i.kt)("p",null,"Upload all these files from the unzipped folder. Your folder should be simple and without spaces, as you\u2019ll need to reference this in the code later. Pick a name and version for your model and register it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of upload model folder",src:n(95265).Z,width:"624",height:"435"})),(0,i.kt)("p",null,"For certain models, you can use the built-in endpoint creation process. However, as of writing this article, our model requires some customization for both the endpoint and environment before launching."),(0,i.kt)("p",null,"First, let\u2019s build a custom environment using a minimal endpoint container. Go to ",(0,i.kt)("strong",{parentName:"p"},"Environments")," in the left menu. You\u2019ll find two options for the environment type: ",(0,i.kt)("strong",{parentName:"p"},"curated")," and ",(0,i.kt)("strong",{parentName:"p"},"custom"),". In this tutorial, we\u2019re turning a curated image into a custom one, so click the ",(0,i.kt)("strong",{parentName:"p"},"curated")," tab. Find the minimal inference server image. At the time of this writing, it was called ",(0,i.kt)("inlineCode",{parentName:"p"},"minimal-ubuntu20.04-py38-cpu-inference"),", but the version may have changed. It\u2019s a minimal Docker image that supports ML endpoints for some pipelines."),(0,i.kt)("p",null,"Click on the image\u2019s ",(0,i.kt)("strong",{parentName:"p"},"Context")," tab to get its Dockerfile and Conda dependencies file. Download these configuration files using the ",(0,i.kt)("strong",{parentName:"p"},"Download Content")," option. This will download a .zip archive with these files, so unzip them and place them in their own directory for customization."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Context tab",src:n(69959).Z,width:"624",height:"481"})),(0,i.kt)("p",null,"Return to the ",(0,i.kt)("strong",{parentName:"p"},"custom")," tab in the environments screen and hit ",(0,i.kt)("strong",{parentName:"p"},"Create")," to make a new custom environment. Give this environment a name. For \u201cSelect environment source,\u201d choose ",(0,i.kt)("strong",{parentName:"p"},"Upload existing docker context")," and select the minimal server folder you downloaded previously."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),". Azure ML will allow you to modify the environment. To add dependencies, update the list under line 8. Here\u2019s what the configuration file should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"name: minimal\nchannels:\n- anaconda\n- conda-forge\ndependencies:\n- python=3.8.13\n- pip=22.1.2\n- pip:\n  - torch\n  - pandas==1.1.5\n  - psutil>=5.2.2,<6.0.0\n  - mlflow-skinny\n  - inference-schema\n  - azureml-defaults~=1.51.0\n  - azureml.automl.dnn.nlp\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of environment settings",src:n(21044).Z,width:"623",height:"318"})),(0,i.kt)("p",null,"Because this is a YAML file, we\u2019ll need to ensure that the tabs on each line item are correct. This updated configuration file adds essential Python data science libraries for our model, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mlflow-skinny"),", a \u201cruntime\u201d version of the ",(0,i.kt)("a",{parentName:"li",href:"https://mlflow.org/"},"MLFlow")," machine learning library "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inference-schema"),", which drives inputs and outputs to our inference server "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azureml-defaults"),", which includes some default code and libraries to run AzureML libraries "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azureml.automl.dnn.nlp"),", which we use to train our model ")),(0,i.kt)("p",null,"With our environment set up, we can now create an endpoint for our application. Open the ",(0,i.kt)("strong",{parentName:"p"},"Endpoints")," menu, then hit ",(0,i.kt)("strong",{parentName:"p"},"Create")," for a new one. In the first window, choose the model you registered previously and click ",(0,i.kt)("strong",{parentName:"p"},"Select"),". Then, click ",(0,i.kt)("strong",{parentName:"p"},"More options")," to configure the endpoint. Give your endpoint a name, leave ",(0,i.kt)("strong",{parentName:"p"},"managed")," selected, and ensure your model is selected in the next window."),(0,i.kt)("p",null,"The deployment screen lets you tweak live probes, score timeouts, and change other configurations. But for now, let\u2019s stick with the defaults."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of deployment screen",src:n(25912).Z,width:"624",height:"510"})),(0,i.kt)("p",null,"Next, we can customize our environment and scoring script. Select the toggle that enables you to customize, pick the environment that you created, and add a scoring script\u2014custom code that runs when you send data to the endpoint."),(0,i.kt)("p",null,"Create a new script named ",(0,i.kt)("inlineCode",{parentName:"p"},"score.py")," and paste this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'from cmath import log\nimport logging\nimport os\nimport json\nimport mlflow\nfrom io import StringIO\nfrom mlflow.pyfunc.scoring_server import infer_and_parse_json_input, predictions_to_json\n\u202f \ndef init():\n    global model\n    global input_schema \n\n    model_path = os.getenv("AZUREML_MODEL_DIR") + "/ReviewSentiment"\n    model = mlflow.pyfunc.load_model(model_path)\n    input_schema = model.metadata.get_input_schema()\n\ndef run(raw_data):\n    json_data = json.loads(raw_data)\n    if "review" not in json_data.keys():\n        raise Exception("Request must contain a top level key named \'review\'")\n\n    serving_input = { "inputs": json_data["review"] }\n    data = infer_and_parse_json_input(serving_input, input_schema)\n    predictions = model.predict(data)\n    return predictions\n')),(0,i.kt)("p",null,"This code has two functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),", which loads and prepares the model, and ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", which uses our data input against the model."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," function, we use the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},'"AZUREML_MODEL_DIR"')," to reference where Azure ML stores our model files. You should also see an additional folder after this variable\u2014this is the base folder that stores our model file when we upload or retrieve a model job."),(0,i.kt)("p",null,"Next, we load the model using the ",(0,i.kt)("inlineCode",{parentName:"p"},"load_model")," function in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mlflow")," library and the input schema, which enables input validation. This preloads all the components for our endpoint so that when a client requests an analysis, we don\u2019t need to wait for items to start up."),(0,i.kt)("p",null,"Now, look at the run function. It takes in raw data as a JSON object, loads it into a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"json_data"),", and checks if the JSON data contains a review key, which allows you to do a basic review of your input."),(0,i.kt)("p",null,"Next, we need to format our input according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mlflow")," model\u2019s requirements. In this case, we\u2019re expecting the API to accept an object formatted as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ "inputs": <JSON-Object> }.\n')),(0,i.kt)("p",null,"We send this input to the model for predictions using the ",(0,i.kt)("inlineCode",{parentName:"p"},"infer_and_parse_json_input")," method. "),(0,i.kt)("p",null,"With the scoring script ready and our environment selected, it\u2019s time to select ",(0,i.kt)("strong",{parentName:"p"},"Compute")," to run our endpoint container. In this demonstration, we use a memory-optimized compute instance so that the endpoint has enough space to load and use the model. Depending on the model, you might need different compute sizes, especially if you\u2019re not using a pre-trained model. If you encounter resource errors during deployment, adjust the size as required."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Register to meet the Azure team at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://aka.ms/aks-day"},"KubeCon and Azure Day"))," in Chicago on ",(0,i.kt)("strong",{parentName:"p"},"November 6, 2023"),". The Azure Product Engineering Team along with the Cloud Advocates team will be there to dive deep with you on developing intelligent apps with Azure Kubernetes Service.")),(0,i.kt)("p",null,"We can also define the traffic sent to this deployment. Azure ML sets up a load balancer for managed endpoints with multiple deployments, often for tasks like A/B testing or rolling out new model versions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of compute settings under deploy",src:n(99578).Z,width:"624",height:"404"})),(0,i.kt)("p",null,"Once you set the configurations, click ",(0,i.kt)("strong",{parentName:"p"},"Create")," to start the deployment. This takes around five to ten minutes while Azure ML assembles the resources and environment. "),(0,i.kt)("p",null,"With the endpoint deployed, we can test the payloads our model can score. As referenced in our code, we need to ensure this input is in a key/value pair called ",(0,i.kt)("inlineCode",{parentName:"p"},"review"),", and the input type is expected to be an array."),(0,i.kt)("p",null,"Let\u2019s try a simple example. Open the endpoint, click ",(0,i.kt)("strong",{parentName:"p"},"Test"),", and enter the following code in the ",(0,i.kt)("strong",{parentName:"p"},"Input data to test endpoint")," box:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "review": ["This Product was so awesome"]\n}\n')),(0,i.kt)("p",null,"After running this test, you should receive a JSON object with a predictions key containing an array with a single value of True, signifying the positive review we just left."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Input data to test",src:n(33846).Z,width:"624",height:"357"})),(0,i.kt)("p",null,"Although our endpoint is for real-time usage, we can still batch requests by specifying them in the input array. But if real-time performance isn\u2019t crucial, we can gather reviews at set intervals, like every 15 minutes, and make this an asynchronous workflow."),(0,i.kt)("p",null,"To demonstrate, let\u2019s try a larger payload. Enter the following test data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "review": [\n        "This Product was so awesome",\n        "I really did like this product",\n        "I\'m a little bit disappointed by this item"\n        ]\n} \n')),(0,i.kt)("p",null,"This time, the endpoint will take a little bit longer to respond, but the array should contain two positives (",(0,i.kt)("inlineCode",{parentName:"p"},"True"),") and one negative (",(0,i.kt)("inlineCode",{parentName:"p"},"False"),")."),(0,i.kt)("p",null,"You can observe these predictions in action by checking your deployment logs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of deployment logs",src:n(17838).Z,width:"624",height:"395"})),(0,i.kt)("h3",{id:"integrating-the-machine-learning-model-into-your-app"},"Integrating the Machine Learning Model into Your App"),(0,i.kt)("p",null,"With our model trained and endpoint ready, we can now call the endpoint from our existing application. First, add a new field to your database to store the new model predictions. Open the project in Visual Studio and add the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Review.cs")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Models")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public string CustomSentiment { get; set; }\n")),(0,i.kt)("p",null,"Next, in the developer PowerShell terminal window, run these commands from your project folder to update your database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet ef migrations add NewReviewField\ndotnet ef database update\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of PowerShell terminal",src:n(87277).Z,width:"624",height:"188"})),(0,i.kt)("p",null,"With this new field in place, update your ",(0,i.kt)("inlineCode",{parentName:"p"},"Review Index.cshtml")," page by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomSentiment")," value, which lists our reviews when we go to the URL ",(0,i.kt)("inlineCode",{parentName:"p"},"/reviews"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<td>\n    @Html.DisplayFor(modelItem => item.CustomSentiment)\n</td>\n")),(0,i.kt)("p",null,"Now, let\u2019s incorporate the endpoint\u2019s boilerplate code into our application to process a review."),(0,i.kt)("p",null,"Return to the Azure ML Studio, open ",(0,i.kt)("strong",{parentName:"p"},"Endpoints")," from the left menu, click on your deployed endpoint, and select ",(0,i.kt)("strong",{parentName:"p"},"Consume"),". You\u2019ll see code snippets for Python, C#, and R. Copy everything from the ",(0,i.kt)("inlineCode",{parentName:"p"},"InvokeRequestResponseService")," method and switch back to your application. Paste the code into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Review")," controller, right after retrieving the sentiment from the Azure AI services API."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Consume tab in ML Studio",src:n(64115).Z,width:"624",height:"589"})),(0,i.kt)("p",null,"Now, trim the code to look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var handler = new HttpClientHandler()\n{\n    ClientCertificateOptions = ClientCertificateOption.Manual,\n    ServerCertificateCustomValidationCallback =\n            (httpRequestMessage, cert, cetChain, policyErrors) => { return true; }\n};\nusing (var client = new HttpClient(handler))\n{\n    var reviewModel = new AIModel();\n    reviewModel.review.Add(review.ReviewText);\n    var requestBody = JsonConvert.SerializeObject(reviewModel);\n\n    const string apiKey = "endpoint-key";\n    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);\n    client.BaseAddress = new Uri("https://userreviewsentimentendpoint.eastus.inference.ml.azure.com/score");\n\n    var content = new StringContent(requestBody);\n    content.Headers.ContentType = new MediaTypeHeaderValue("application/json");\n\n    HttpResponseMessage response = await client.PostAsync("", content);\n\n    if (response.IsSuccessStatusCode)\n    {\n        string result = await response.Content.ReadAsStringAsync();\n        var data = JsonConvert.DeserializeObject<List<string>>(result);\n\n        review.CustomSentiment = data.First();\n    }\n}\n')),(0,i.kt)("p",null,"With these modifications and cleanup in the boilerplate code, this block now:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Populates a new class, ",(0,i.kt)("inlineCode",{parentName:"li"},"AIModel"),", with our review text"),(0,i.kt)("li",{parentName:"ul"},"Creates a standard .NET HTTP client"),(0,i.kt)("li",{parentName:"ul"},"Sends the review information to the endpoint"),(0,i.kt)("li",{parentName:"ul"},"Waits for the array of values and passes on to be written to the database")),(0,i.kt)("p",null,"Now, to ensure the model receives the same types of values the API expects (an array of strings), we need to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"AIModel")," class as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class AIModel\n{\n   public List<string> review { get; set; }\n\n   public AIModel()\n   {\n        review = new List<string>();\n   }\n} \n")),(0,i.kt)("p",null,"This will send an array of JSON-converted review strings to the model."),(0,i.kt)("h3",{id:"testing-and-validating-the-enhanced-intelligent-app"},"Testing and Validating the Enhanced Intelligent App"),(0,i.kt)("p",null,"Finally, let\u2019s build and run our application to test the result. When the web page opens, navigate to ",(0,i.kt)("strong",{parentName:"p"},"/Reviews/Create")," and enter a sample review to have the application generate a response from both Azure AI services and our Custom AI endpoint. Pick a category and enter the text \u201cThis product is awesome.\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of sample review",src:n(97893).Z,width:"321",height:"307"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),". The process will take a little longer this time as we\u2019re calling both the Azure AI services API and our Custom AI API. But once the process completes and you return to the Reviews screen, you\u2019ll see both the Azure AI Analysis and the custom sentiment marked as positive (",(0,i.kt)("inlineCode",{parentName:"p"},"True"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of sample review in Index",src:n(18806).Z,width:"624",height:"101"})),(0,i.kt)("p",null,"Comparing the results for our tutorial example, you might notice a negligible difference between the Azure AI model and our custom one. This could be due to various reasons."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The phrase we used was pretty generic and didn\u2019t supply much detail."),(0,i.kt)("li",{parentName:"ul"},"The data we used to train the model is pretty broad, similar to Azure AI."),(0,i.kt)("li",{parentName:"ul"},"The data is open source and may have also been used to train the Azure AI model.")),(0,i.kt)("p",null,"However, for our demonstration, we\u2019re expecting longer reviews that are more specific. So, let\u2019s try a review that resembles real-life feedback: \u201cThis would have been a good product, but there were some issues related to the battery life. Delivery times were quick though, and the price was reasonable.\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of several reviews in Index",src:n(35384).Z,width:"625",height:"125"})),(0,i.kt)("p",null,"This time, our custom model shows a sentiment of true, whereas Azure AI categorizes it as mixed. Thanks to the training data we used, our model makes a clearer decision regarding the review\u2019s sentiment."),(0,i.kt)("p",null,"Let\u2019s try another one: \u201cThe price was cheap and it did the job, but I should have bought the bigger model.\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of multiple reviews in Index after adding more feedback",src:n(42572).Z,width:"623",height:"163"})),(0,i.kt)("p",null,"Now, Azure AI analyzes this review as generally neutral, while our AI service analyzes it as negative. Both Azure AI and our custom-trained model offer excellent sentiment analysis for text. However, custom models can also provide specialized analysis or additional features based on data collected over time."),(0,i.kt)("p",null,"If your applications have broader features and data, you can construct more complex models that analyze multi-columnar data or make decisions based on historical actions, further integrating AI into your workflows."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we expanded our application by training our custom AI model in Azure Machine Learning. We covered how to train a sentiment analysis model based on our own application data and incorporate this into our application. We also compared our custom-built model to Azure AI and briefly explored expanding AI capabilities with larger applications and datasets."),(0,i.kt)("p",null,"Azure ML allows you to build upon Azure AI\u2019s existing AI functionalities, enabling you to train, publish, and seamlessly use AI services within applications. With the newfound ability to train custom models, the possibilities for AI capabilities are boundless."),(0,i.kt)("p",null,"While off-the-shelf solutions offer general utility, the power to customize models allows for fine-tuning to specific tasks. For instance, you can use this knowledge to create a bespoke recommendation system for a niche e-commerce platform, catering to subtle buying patterns that traditional models might overlook. With the capacity to train tailored models, you\u2019re ready to venture beyond generalized solutions and unlock AI\u2019s true potential for specialized applications."),(0,i.kt)("p",null,"Take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://ml.azure.com/"},"Azure Machine Learning")," to integrate more advanced AI features and take your Intelligent Applications to the next level."),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete this ",(0,i.kt)("strong",{parentName:"li"},"hands-on sample")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Building-Your-First-Intelligent-App-with-Azure-Cognitive-Services/tree/main/Microsoft_Series_2_Code/Source%20-%20Article%207%20%2B%208/UserFeedbackApp/Models"},"project code")," to build your intelligent app with multi-modal databases."),(0,i.kt)("li",{parentName:"ul"},"Complete the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://aka.ms/fallforIA/apps-csc"},"Intelligent apps Cloud Skills Challenge"))," to build on your app dev and AI skills."),(0,i.kt)("li",{parentName:"ul"},"Watch the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://reactor.microsoft.com/en-us/reactor/events/20728/?WT.mc_id=javascript-99907-ninarasi"},"Ask the Expert: Azure Container Apps"))," session where the Product Engineering team goes deep with demos while addressing the concepts for building intelligent apps using Azure Container Apps.")))}u.isMDXComponent=!0},5578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-1-27e64c4a03e202d1eb543a67e559aafc.jpeg"},64115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-10-51500de49afa427d901d1cb7f23a9486.png"},97893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-11-e2f5383783382db417d4e9281254f386.png"},18806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-12-68940960c985d7011f383415c3c8a6fc.png"},35384:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-13-ec1676ef241c503bcc39d5536de9a0a8.png"},42572:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-14-0ccaa5d0158af2909fb33196a7440475.png"},95265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-2-da1653a4bf764252da867cfbfea6f6bd.png"},69959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-3-5f36e471326919003054a7a273953b0d.png"},21044:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-4-be02cc622501074523dd7197da3014ae.jpeg"},25912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-5-30e9de83ba2060174343fc7bf61ceff0.jpeg"},99578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-6-0482a0839905ef1243599ead645595bf.jpeg"},33846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-7-04f7a698e98c1f1102624627023895a6.png"},17838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-8-40e6f510ed9b8e3bad9c60a72b07a61c.png"},87277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-3-4-9-3d92776567d2a5b58ff846951f8a821f.jpeg"}}]);