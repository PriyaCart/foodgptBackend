const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const engine = 'davinci-codex';


module.exports = {
  async breakfastList (req,res){
    try{
     // console.log("be entered")
      const place = req.query.place;
     // console.log(place, "place")
      let random = Math.floor(Math.random() * 3) + 6;
      let cityName;
      let cityResponse;
      const configuration = new Configuration({
        apiKey: "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"
      });
    
       const openai = new OpenAIApi(configuration);
      // const response = await openai.createCompletion({
      //   model: "text-davinci-003",
      //   prompt: `is there any place named ${place}? say yes or no. don't give any extra text.`,
      //   temperature: 0,
      //   max_tokens: 60,
      //   top_p: 1.0,
      //   frequency_penalty: 0.5,
      //   presence_penalty: 0.0,
      // });
      // cityName = response.data.choices[0].text;
      // cityResponse = cityName.search("Yes");
      // //console.log(cityName, "cityname")
      // if(cityResponse === -1){
      //   return res.send({errcity:cityResponse})
      // }
  //  if(cityResponse !== -1){
        const breakfast = await openai.createCompletion({
          model: "text-davinci-003",
          prompt:  `list some popular dishes of ${place}. For example popular dishes of mulbagal are mulbagal masala dosa, Ragi Mudde, Akki Rotti, Bisi Bele Bath, Maddur Vada, Mutton Biryani. context: please give more accurate popular dishes. Results should be seperated by comma without numbers. If the dish is sweet or snack please mention the category name with dish. For example Halwa sweet.`,
          temperature: 0,
          max_tokens: 500,
          top_p: 1.0,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
        });
       // console.log(breakfast.data, "breakfast")
        // let breakfastText = breakfast.data.choices[0].text;
        // breakfastArray = breakfastText.split(',');
        // let breakfastitem = breakfastArray[0].replace('\n\n','');
        // let lastItem = breakfastArray[breakfastArray.length-1].replace('.','');
        // breakfastArray.splice(0,1);
        // breakfastArray.splice(-1,1);
        // breakfastArray.unshift(breakfastitem);
        // breakfastArray.unshift(lastItem);
      console.log(breakfast.data.choices[0].text, "bf")
       return res.send(breakfast.data.choices[0].text)
 //   }
  
    }
    catch(err){
     // console.log(err.message, "err")
      return res.send({error:err.message})
 }
  },



  async populardishtest(req,res){
    try{
      const configuration = new Configuration({
        apiKey: "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"
      });
    
      const openai = new OpenAIApi(configuration);

      const dishContent = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:  `Can you explain the appearance of sigular word of chicken pieces dish in 40 words? context: It should also include color, shape, size and lookwise.`,
        temperature: 0,
        max_tokens: 500,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });
      const dishName = dishContent.data.choices[0].text;
      console.log(dishName, "dishname")
      const response = await openai.createImage({
        prompt: dishName,
        n: 1,
        size: "256x256",
      });
      image_url = response.data.data[0].url;
      console.log(image_url, "imgurl1")
      return res.send(image_url)
    }
    catch(err){
    //  console.log(err, "ERROR")
         return res.send(err)
    }
  },
  async populardish2(req,res){
    try{
      let dishArray = []
      dish = req.query.dish;
      dishArray = dish.split(',');
      let bfArray = [];
      const configuration = new Configuration({
        apiKey: "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"
      });
    
      const openai = new OpenAIApi(configuration);
      for(let i=0; i<dishArray.length; i++){
      const response = await openai.createImage({
        prompt: `${dishArray[i]} dish`,
        n: 1,
        size: "256x256",
      });
      image_url = response.data.data[0].url;
      bfArray.push(image_url)
    }
    // console.log(bfArray, "imgurl")
      return res.send({dish:dishArray, img:bfArray})
    }
    catch(err){
    //  console.log(err, "ERROR")
         return res.send(err)
    }
  },
  async populardish3(req,res){
    try{
      console.log("pop")
      let dishArray = [];
    //  dish = req.query.dish;
   //   dishArray = dish.split(',');
      let bfArray = [];
      const configuration = new Configuration({
        apiKey: "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"
      });
    
      const openai = new OpenAIApi(configuration);
      const dishContent = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:  `Describe about locho dish in 30 words. For example, Ghari is a sweet dish from Surat, India. It is round in shape, white in color, and has a soft and chewy texture. It is made with sweetened mawa (milk solids), ghee, sugar, and flavored with cardamom. context: Please explain how it looks like for example color, shape and texture. explain the recipe.`,
        temperature: 0,
        max_tokens: 500,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });
      console.log(dishContent.data.choices[0].text, "dish message");
      const dishName = dishContent.data.choices[0].text;

      const response = await openai.createImage({
        prompt: dishName,
        n: 1,
        size: "256x256",
      });
      image_url = response.data.data[0].url;
     // bfArray.push(image_url)
   // }
      console.log(response.data)
      console.log(image_url, "img")
      return res.send(image_url)
    }
    catch(err){
         console.log(err, "ERROR")
         return res.send(err)
    }
  },

  async test (req,res){
    try{
      const configuration = new Configuration({
        apiKey: "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"
      });
      const openai = new OpenAIApi(configuration);
        const breakfast = await openai.createCompletion({
          model: "text-davinci-003",
          prompt:  `list some popular dishes of ${place}. For example popular dishes of mulbagal are mulbagal masala dosa, Ragi Mudde, Akki Rotti, Bisi Bele Bath, Maddur Vada, Mutton Biryani. context: please give more accurate popular dishes. Results should be seperated by comma without numbers. `,
          temperature: 0,
          max_tokens: 500,
          top_p: 1.0,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
        });
      
      console.log(breakfast.data.choices[0].text, "test")
       return res.send(breakfast.data.choices[0].text)
 //   }
  
    }
    catch(err){
     // console.log(err.message, "err")
      return res.send({error:err.message})
 }
  },

  async rephrase (req,res){
    try{
     console.log("be entered")
      const text = req.query.text;
      console.log(text, "place")
      
      const configuration = new Configuration({
        apiKey: "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"
      });
    
      const openai = new OpenAIApi(configuration);
      // const response = await openai.createCompletion({
      //   model: "text-davinci-003",
      //   prompt:  `Please rephrase the following text: ${text}`,
      //   temperature: 0,
      //   max_tokens: 500,
      //   top_p: 1.0,
      //   frequency_penalty: 0.5,
      //   presence_penalty: 0.0,
      // });
      const response= await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0,
        messages: [{role: "user", content: `Please rephrase the following text: ${text}`}],
      });
      console.log(response.data.choices[0].message.content)
      return res.send({mytext:response.data.choices[0].message.content});

       // return res.send({mytext: "My system is currently running the Chrome extension. How can I make it accessible for others to use my Chrome extension app? For instance, if I create a web app, I must deploy it on a Netlify server or any other server to make it available for everyone to use"});
      // const mytext = await openai.createChatCompletion({
      //   model: "gpt-3.5-turbo",
      //   temperature: 0,
      //   messages: [{role: "user", content: `can you modify and give the given text. Give the text without grammar mistake:  ${text}`}],
      // });
      //   console.log(mytext.data.choices[0].message.content, "mytext")
      //   return res.send({mytext: mytext.data.choices[0].message.content})
    //  console.log("hello world")
   //   return res.send({mytext: "hello world"})

  
    }
    catch(err){
      console.log(err.message, "err")
      return res.send({error:err.message})
 }
  },


}