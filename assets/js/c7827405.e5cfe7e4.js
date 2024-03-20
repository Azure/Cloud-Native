"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81284],{80714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(85893),r=n(11151);const a={date:"2024-03-20T09:00",slug:"forecasting-energy-usage-with-intelligent-apps-3",title:"2.3 Forecasting Energy Usage with Intelligent Apps Part 3",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud-Scale","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this series, you\u2019ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,o={permalink:"/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-3",source:"@site/blog-60daysofIA/2024-03-20/forecasting-energy-usage-with-intelligent-apps-3.md",title:"2.3 Forecasting Energy Usage with Intelligent Apps Part 3",description:"In this series, you\u2019ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost.",date:"2024-03-20T09:00:00.000Z",formattedDate:"March 20, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:8.315,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-20T09:00",slug:"forecasting-energy-usage-with-intelligent-apps-3",title:"2.3 Forecasting Energy Usage with Intelligent Apps Part 3",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud-Scale","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this series, you\u2019ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,nextItem:{title:"2.2 Forecasting Energy Usage with Intelligent Apps Part 2",permalink:"/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-2"}},l={authorsImageUrls:[void 0]},c=[{value:"Forecasting Energy Usage with Intelligent Apps Part 3: Adding a Web Interface",id:"forecasting-energy-usage-with-intelligent-apps-part-3-adding-a-web-interface",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building an Intelligent App with Azure Kubernetes Service and KAITO",id:"building-an-intelligent-app-with-azure-kubernetes-service-and-kaito",level:3},{value:"Creating the Web Interface",id:"creating-the-web-interface",level:4},{value:"Building and Pushing to ACR",id:"building-and-pushing-to-acr",level:5},{value:"Connecting to AKS",id:"connecting-to-aks",level:5},{value:"Deployment",id:"deployment",level:4},{value:"Running the Web App",id:"running-the-web-app",level:5},{value:"Why Build Intelligent Apps with KAITO?",id:"why-build-intelligent-apps-with-kaito",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/forecasting-energy-usage-with-intelligent-apps-3"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,i.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/forecasting-energy-usage-with-intelligent-apps-3"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"This three-part series demonstrates how to create an Intelligent App that forecasts future energy consumption and pricing based on historical data."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/forecasting-energy-usage-with-intelligent-apps-3"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Graphic with a bar chart in a computer-like window in the top-right corner. To the left of the graph is a circle with a lightning bolt in it. At the bottom of the graphic is text that reads, &quot;Forecasting Energy Usage with Intelligent Apps: Adding a Website Interface.&quot;",src:n(5484).Z+"",width:"624",height:"380"})}),"\n",(0,i.jsx)(t.p,{children:"*This three-part series demonstrates how to create an Intelligent App that forecasts future energy consumption and pricing based on historical data. In this final installment of the series, you\u2019ll create a basic web interface that enables the user to input energy usage data and parameters, output the results and the model-generated report into the web interface for easy viewing. Finally, you\u2019ll deploy using the AKS environment set up in Part 1. *"}),"\n",(0,i.jsx)(t.h2,{id:"forecasting-energy-usage-with-intelligent-apps-part-3-adding-a-web-interface",children:"Forecasting Energy Usage with Intelligent Apps Part 3: Adding a Web Interface"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-1",children:"Part 1 of this series"}),", you set up an ",(0,i.jsx)(t.a,{href:"https://azure.microsoft.com/products/kubernetes-service?ocid=buildia24_60days_blogs",children:"Azure Kubernetes Service"})," (AKS) cluster and prepared it for automated deployment with the help of ",(0,i.jsx)(t.a,{href:"https://azure.microsoft.com/updates/preview-ai-toolchain-operator-addon-for-aks/?ocid=buildia24_60days_blogs",children:"Kubernetes AI Toolchain Operator"})," (KAITO) and Llama 2. Then, in ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-2",children:"Part 2"}),", you built a model that predicts future energy usage/pricing based on parameters input by the user and set up the Intelligent App\u2019s back end."]}),"\n",(0,i.jsx)(t.p,{children:"In this third and final article of the series, you\u2019ll create a primary web interface that empowers users to input energy usage data and parameters to generate forecasts. Through this interface, users can gain insights into future energy demands, aiding in strategic decision-making and resource allocation."}),"\n",(0,i.jsx)(t.p,{children:"Let\u2019s dive in!"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To follow along, ensure you have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Completed Parts ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-1",children:"1"})," and ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-2",children:"2"})," of this series"]}),"\n",(0,i.jsxs)(t.li,{children:["A code editor like ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})]}),"\n",(0,i.jsx)(t.li,{children:"Python 3.10 or higher"}),"\n",(0,i.jsxs)(t.li,{children:["The new Forecast web app ",(0,i.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/tree/main/Part%202",children:"source code"})," downloaded"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For a sneak peek of the final product, check out the ",(0,i.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/tree/main/Part%203",children:"complete project code"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"building-an-intelligent-app-with-azure-kubernetes-service-and-kaito",children:"Building an Intelligent App with Azure Kubernetes Service and KAITO"}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, you\u2019ll create a basic web interface that enables the user to input or upload energy usage data and parameters to generate future predictions of usage/pricing. Then, you\u2019ll output the results and the report generated from the model into the web interface for easy viewing. Finally, you\u2019ll deploy the Intelligent App using the AKS environment you set up in Part 1."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Checkout the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://aka.ms/learn-live-building-intelligent-apps-aks-ep4?ocid=buildia24_60days_blogs",children:"Intelligent Apps on AKS: Episode 4"})}),", a technical deep dive hands-on training with an expert on how to use AKS and Azure to take your intelligent app global."]})}),"\n",(0,i.jsx)(t.h4,{id:"creating-the-web-interface",children:"Creating the Web Interface"}),"\n",(0,i.jsxs)(t.p,{children:["To develop your web interface, you\u2019ll use ",(0,i.jsx)(t.a,{href:"https://streamlit.io/",children:"streamlit"}),"\u2014a Python framework for creating web apps. This combination offers flexibility and ease of development, enabling seamless data processing and integration of visualization components."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"The User Interface"})}),"\n",(0,i.jsx)(t.p,{children:"The core of your web interface is a streamlit form where users can input relevant parameters. The form includes fields for adding data related to electricity generation from different sources. Upon submitting the form, users trigger the prediction process."}),"\n",(0,i.jsxs)(t.p,{children:["Locate the directory of the source code you have downloaded and open the ",(0,i.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/blob/main/Part%202/app.py",children:"app.py file"}),". It centralizes the logic needed by the new Forecast app to process user input and produce the price prediction and analysis."]}),"\n",(0,i.jsx)(t.p,{children:"For simplicity, let\u2019s review just the most pertinent parts of the file:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# omitted for brevity \r\n\r\ndef generate_report(user_input, price):  \r\n\r\n    # Get the IP address from the environment variable \r\n    IP_ADDRESS = os.environ.get('ENERGYFORECASTAPI_IP') \r\n\r\n    # Endpoint URL \r\n    url = f'http://{IP_ADDRESS}/predict-chat' \r\n\r\n    # Request payload \r\n\r\n    payload = { \r\n\r\n# omitted for brevity \r\n\r\n    } \r\n\r\n    # Header \r\n    headers = {'Content-Type': 'application/json'} \r\n\r\n    # Perform the request \r\n    response = requests.post(url, json=payload, headers=headers) \r\n\r\n    # Check the response \r\n    if response.status_code == 200: \r\n        print(\"Response:\", response.json()) \r\n        json_data = response.json() \r\n        report = json_data['results'][0][1]['content'] \r\n        return report \r\n    else: \r\n        st.header('Error', divider='rainbow') \r\n        print(\"Error:\", response.text) \r\n        return response.text \r\n\r\ndef get_forecast_price(user_input): \r\n    model = load('xgb_model.joblib')        \r\n    price = np.float64(model.predict(user_input)[0]) \r\n    price = np.around(price, 2) \r\n    return price \r\n\r\nst.title(\"Predicting Energy Pricing\") \r\nst.write(\"This Intelligent App analyzes data on energy consumption and predicts the electricity price for the next hour. It then creates a report summarizing the electricity usage and price.\") \r\n\r\nwith st.form(\"my_form\"): \r\n\r\n# some parts were omitted for brevity \r\n\r\n       user_input = [[np.float64(generation_fossil_brown_coal_lignite), np.float64(generation_fossil_gas),  \r\n                      np.float64(generation_fossil_hard_coal), np.float64(generation_fossil_oil), \r\n                      np.float64(generation_hydro_pumped_storage_consumption), np.float64(generation_other_renewable), \r\n                      np.float64(generation_wind_onshore), np.float64(total_load_actual), hour, weekday, month, business_hour, \r\n                      weekend]] \r\n        \r\n       price = get_forecast_price(user_input) \r\n\r\n       st.header('Forecast Price', divider='rainbow') \r\n       st.write(f\"{str(round(price, 2))} EUR/MW\") \r\n\r\n       report = generate_report(user_input, price) \r\n\r\n       st.header('Analysis', divider='rainbow') \r\n       st.write(report) \n"})}),"\n",(0,i.jsx)(t.h5,{id:"building-and-pushing-to-acr",children:"Building and Pushing to ACR"}),"\n",(0,i.jsx)(t.p,{children:"Open your terminal at the root directory of the Forecast app\u2019s source code you downloaded earlier. Run the pair of commands below to initiate and use a Python virtual environment:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"python -m venv .env \r\n\r\n.env\\Scripts\\activate \n"})}),"\n",(0,i.jsx)(t.p,{children:"Then, run the following command to complete the installation of dependencies of your Python project:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"pip install -r requirements.txt\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Execute the following commands to build the image locally and push it to your Azure Container Registry (ACR). Be sure to replace ",(0,i.jsx)(t.code,{children:"<username>"})," and ",(0,i.jsx)(t.code,{children:"<password>"})," with your username and password."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo docker build --no-cache -f Dockerfile -t forecast-web -t <YOUR-ACR-NAME>.azurecr.io/forecast-web:latest . \r\n\r\ndocker login <YOUR-ACR-NAME>.azurecr.io --username <username> --password-stdin <password> \r\n\r\ndocker push <YOUR-ACR-NAME>.azurecr.io/forecast-web:latest \n"})}),"\n",(0,i.jsx)(t.h5,{id:"connecting-to-aks",children:"Connecting to AKS"}),"\n",(0,i.jsx)(t.p,{children:"Start by making sure you\u2019re logged in to Azure and that you have the correct AKS credentials by running the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az login --tenant <YOUR-AZURE-TENANT-ID>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next, run the following commands to enable access to your AKS cluster via your terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export RESOURCE_GROUP=<YOUR-RESOURCE-GROUP> \r\nexport MY_CLUSTER=<YOUR-AKS-CLUSTER-NAME> \r\nexport LOCATION=<YOUR-LOCATION> \r\nexport SUBSCRIPTION=<YOUR-AZURE-SUBSCRIPTION> \r\n\r\naz account set --subscription $SUBSCRIPTION \r\naz aks get-credentials --resource-group $RESOURCE_GROUP --name $MY_CLUSTER \n"})}),"\n",(0,i.jsx)(t.h4,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(t.p,{children:"Before deploying, you need to retrieve the cluster IP of the Forecast API service running on your AKS cluster. Execute the following command in your terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"> kubectl get svc forecast-api-service \n"})}),"\n",(0,i.jsx)(t.p,{children:"Copy the inference service\u2019s cluster IP:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"NAME                   TYPE           CLUSTER-IP   EXTERNAL-IP     PORT(S)        AGE \r\nforecast-api-service   LoadBalancer   <CLUSTERIP>  <EXTERNAL-IP>   80:32306/TCP   46h \n"})}),"\n",(0,i.jsxs)(t.p,{children:["Next, modify the ",(0,i.jsx)(t.code,{children:"deployment.yaml"})," file using the code below, replacing the ",(0,i.jsx)(t.code,{children:"<ENERGY-FORECAST-API-IP>"})," placeholder below with the Forecast API service\u2019s cluster IP value you copied above:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apiVersion: apps/v1 \r\nkind: Deployment \r\nmetadata: \r\n  name: forecast-web-deployment \r\nspec: \r\n  replicas: 1 \r\n  selector: \r\n    matchLabels: \r\n      app: forecast-web \r\n  template: \r\n    metadata: \r\n      labels: \r\n        app: forecast-web \r\n    spec: \r\n      containers: \r\n      - name: forecast-web \r\n        image: openaidemoacr.azurecr.io/forecast-web:latest \r\n        ports: \r\n        - containerPort: 8501 \r\n        env: \r\n        - name: ENERGYFORECASTAPI_IP \r\n          value: <ENERGY-FORECAST-API-IP> \n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, save the updated ",(0,i.jsx)(t.code,{children:"deployment.yaml"})," file."]}),"\n",(0,i.jsx)(t.p,{children:"Execute the following commands to provision a new pod and deploy the service to your AKS cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"snap install kubectl --classic \r\nkubectl apply -f deployment.yaml \r\nkubectl apply -f service.yaml \n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," After the deployment commands have been applied, the Forecast web app may take a few minutes to get up and running."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Complete the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://aka.ms/intelligent-apps/apps-csc?ocid=buildia24_60days_blogs",children:"Intelligent Apps Skills Challenge"})})," to compete for the leaderboard and earn a Microsoft Learn Badge."]})}),"\n",(0,i.jsx)(t.h5,{id:"running-the-web-app",children:"Running the Web App"}),"\n",(0,i.jsx)(t.p,{children:"Now that the Forecast web app is deployed, let\u2019s try it out!"}),"\n",(0,i.jsx)(t.p,{children:"Run the command below and grab your app\u2019s external IP:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"> kubectl get svc forecast-web-service \r\n\r\nNAME                   TYPE           CLUSTER-IP   EXTERNAL-IP     PORT(S)        \r\nforecast-web-service   LoadBalancer   10.0.81.68   <EXTERNAL-IP>   80:30805/TCP \n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, paste the ",(0,i.jsx)(t.code,{children:"<External-IP>"})," into a new web browser tab to test your Forecast web app:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of the Predicting Energy Pricing app open in a browser.",src:n(43794).Z+"",width:"426",height:"627"})}),"\n",(0,i.jsxs)(t.p,{children:["Fill in the form with the energy fields, plus the date and time, and hit ",(0,i.jsx)(t.strong,{children:"Submit"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Once you submit the form, you\u2019ll see predictions for energy prices categorized and a detailed report summarizing the electricity usage and price."}),"\n",(0,i.jsx)(t.p,{children:"Once the form is submitted, the Forecast web queries the model trained in Part 2 and obtains the forecast price. Then, it accesses the Forecast API service, which is hosted in your AKS cluster, to produce the summary report using the generative capabilities of the Llama2 Chat model:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of the results in the Forecast  app. It includes an analysis of generation sources and their respective usage, a total for the actual load, and a price forecast.",src:n(94191).Z+"",width:"502",height:"505"})}),"\n",(0,i.jsx)(t.h3,{id:"why-build-intelligent-apps-with-kaito",children:"Why Build Intelligent Apps with KAITO?"}),"\n",(0,i.jsx)(t.p,{children:"KAITO provides significant advantages when building an AI project. One key benefit is the drastic reduction in time and effort required to deploy AI models. This is because KAITO automates many complex tasks that traditionally demand significant manual intervention."}),"\n",(0,i.jsx)(t.p,{children:"Without utilizing KAITO, building an AI project within Kubernetes could present several challenges:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You need to manually handle complex tasks, like provisioning infrastructure resources, deploying models, managing endpoints, and optimizing resource utilization. The manual approach takes substantial time and effort and increases the likelihood of errors and inconsistencies across deployments."}),"\n",(0,i.jsx)(t.li,{children:"The absence of automated infrastructure provisioning may result in suboptimal resource allocation and higher operational costs."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"But with the help of KAITO, you can swiftly deploy hosted models from a variety of open-source repositories or custom models\u2014all without the need for extensive expertise in Kubernetes infrastructure management. Moreover, KAITO facilitates the seamless provisioning of infrastructure resources tailored to the specific requirements of AI workloads, optimizing cost efficiency and operational effectiveness."}),"\n",(0,i.jsxs)(t.p,{children:["For more details, refer to this ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=9EvA9gbTS9M&t=676s",children:"Microsoft Ignite presentation"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"In this article, you created a web interface using Streamlit, Docker, and Kubernetes, allowing users to input data and generate insights into energy usage patterns."}),"\n",(0,i.jsxs)(t.p,{children:["Azure technologies provide solutions for reducing carbon footprint and promoting sustainability. The ",(0,i.jsx)(t.a,{href:"https://github.com/Azure/carbon-aware-keda-operator",children:"Carbon Aware Keda Operator"})," is one such innovation designed to reduce the carbon footprint of Kubernetes resources."]}),"\n",(0,i.jsxs)(t.p,{children:["Now that you\u2019ve had hands-on experience in building an Intelligent App, join the ",(0,i.jsx)(t.a,{href:"https://aka.ms/intelligent-apps/csc",children:"Cloud Skill Challenges"})," and check out the ",(0,i.jsx)(t.a,{href:"https://aka.ms/intelligent-apps/ate-aks?ocid=buildia24_60days_blogs",children:"Ask The Expert session"})," with the AKS product team to keep up with the latest in cloud computing. And don\u2019t forget about the ",(0,i.jsxs)(t.strong,{children:["AKS ",(0,i.jsx)(t.a,{href:"https://aka.ms/aks-day",children:"Customer"})," and ",(0,i.jsx)(t.a,{href:"https://aka.ms/aks-lab-day",children:"Lab"})," Days"]})," at KubeCon EU, a great opportunity to network with AKS and Azure experts. Let\u2019s work together to drive innovation!"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5484:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-3-1-2f14667a3bdf00f74a1dd5894dc9f96d.png"},43794:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-3-2-2717a2cd0938f3c98cd9088517e2c520.png"},94191:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-3-3-d3878a1e76901e33b7c01aafbb437e35.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);