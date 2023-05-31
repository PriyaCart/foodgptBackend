const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");


module.exports = {
  async breakfastList (req,res){
    try{
    //  console.log("be entered")
      const place = req.query.place;
     // console.log(place, "place")
      let random = Math.floor(Math.random() * 5) + 8;
      let cityName;
      let cityResponse;
      const configuration = new Configuration({
        apiKey: "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"
      });
    
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `is there any place named ${place}? say yes or no. don't give any extra text.`,
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });
      cityName = response.data.choices[0].text;
      cityResponse = cityName.search("Yes");
      //console.log(cityName, "cityname")
      if(cityResponse === -1){
        return res.send({errcity:cityResponse})
      }
      if(cityResponse !== -1){
      const breakfast = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0,
        messages: [{role: "user", content: `list ${random} popular dishes of ${place}. For example popular dishes of mulbagal are mulbagal masala dosa, Ragi Mudde, Akki Rotti, Bisi Bele Bath, Maddur Vada, Mutton Biryani. context: please give more accurate popular dishes. Results should be seperated by comma without numbers. Gives list of dishes only. Don't give any extra texts.`}],
      });
       // console.log(breakfast.data, "breakfast")
        let breakfastText = breakfast.data.choices[0].message.content;
        breakfastArray = breakfastText.split(',');
        let breakfastitem = breakfastArray[0].replace('\n\n','');
        let lastItem = breakfastArray[breakfastArray.length-1].replace('.','');
        breakfastArray.splice(0,1);
        breakfastArray.splice(-1,1);
        breakfastArray.unshift(breakfastitem);
        breakfastArray.unshift(lastItem);
        return res.send({breakfast: breakfastArray, place: place})
 //   }
  }
    }
    catch(err){
    //  console.log(err.message, "err")
      return res.send({error:err.message})
 }
  },



  async populardish1(req,res){
    try{
      let dishArray = [];
      dish = req.query.dish;
      dishArray = dish.split(',');
     // console.log(dishArray)
      let bfArray = [];
      const configuration = new Configuration({
        apiKey: "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"
      });
      const openai = new OpenAIApi(configuration);
      for(let i=0; i<dishArray.length; i++){
       // console.log(dishArray[i], '123')
        // const dishContent = await openai.createChatCompletion({
        //   model: "gpt-3.5-turbo",
        //   temperature: 0,
        //   messages: [{role: "user", content: `Can you explain the appearance of ${dishArray[i]} dish in 40 words? context: It should also include color, shape, size and lookwise`}],
        // });
      // const dishContent = await openai.createCompletion({z
      //     model: "text-davinci-003",
      //     prompt:  `Can you explain the appearance of ${dishArray[i]} dish in 40 words? context: It should also include color, shape, size and lookwise`,
      //     temperature: 0,
      //     max_tokens: 500,
      //     top_p: 1.0,
      //     frequency_penalty: 0.5,
      //     presence_penalty: 0.0,
      //   });
     // console.log(dishContent.data.choices[0].text, "dish message");
      //  const dishName = dishContent.data.choices[0].text;
      //  const dishName =   dishContent.data.choices[0].message.content;
        const response = await openai.createImage({
        prompt: `${dishArray[i]} dish`,
        n: 1,
        size: "256x256",
      });
      image_url = response.data.data[0].url;
      bfArray.push(image_url)
    }
      //console.log(bfArray, "imgurl1")
      return res.send({dish:dishArray, img:bfArray})
    }
    catch(err){
        // console.log(err, "ERROR")
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
      // const dishContent = await openai.createCompletion({
      //     model: "text-davinci-003",
      //     prompt:  `Describe about ${dishArray[i]} dish in 30 words. For example, Ghari is a sweet dish from Surat, India. It is round in shape, white in color, and has a soft and chewy texture. It is made with sweetened mawa (milk solids), ghee, sugar, and flavored with cardamom. context: Please explain how it looks like for example color, shape and texture. explain the recipe.`,
      //     temperature: 0,
      //     max_tokens: 500,
      //     top_p: 1.0,
      //     frequency_penalty: 0.5,
      //     presence_penalty: 0.0,
      //   });
      //console.log(dishContent.data.choices[0].text, "dish message");
    //  const dishName = dishContent.data.choices[0].text;
      const response = await openai.createImage({
        prompt: `${dishArray[i]} dish`,
        n: 1,
        size: "256x256",
      });
      image_url = response.data.data[0].url;
      bfArray.push(image_url)
    }
      ///console.log(bfArray, "imgurl")
      return res.send({dish:dishArray, img:bfArray})
    }
    catch(err){
       //  console.log(err, "ERROR")
         return res.send(err)
    }
  },
  async populardish3(req,res){
    try{
      let dishArray = [];
      dish = req.query.dish;
      dishArray = dish.split(',');
      let bfArray = [];
      const configuration = new Configuration({
        apiKey: "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"
      });
      const openai = new OpenAIApi(configuration);
      for(let i=0; i<dishArray.length; i++){
      // const dishContent = await openai.createCompletion({
      //     model: "text-davinci-003",
      //     prompt:  `Describe about ${dishArray[i]} dish in 30 words. For example, Ghari is a sweet dish from Surat, India. It is round in shape, white in color, and has a soft and chewy texture. It is made with sweetened mawa (milk solids), ghee, sugar, and flavored with cardamom. context: Please explain how it looks like for example color, shape and texture. explain the recipe.`,
      //     temperature: 0,
      //     max_tokens: 500,
      //     top_p: 1.0,
      //     frequency_penalty: 0.5,
      //     presence_penalty: 0.0,
      //   });
      //console.log(dishContent.data.choices[0].text, "dish message");
    //  const dishName = dishContent.data.choices[0].text;
      const response = await openai.createImage({
        prompt: `${dishArray[i]} dish`,
        n: 1,
        size: "256x256",
      });
      image_url = response.data.data[0].url;
      bfArray.push(image_url)
    }
    console.log(bfArray, "imgurl3")
    return res.send({dish:dishArray, img:bfArray})
    }
    catch(err){
      //   console.log(err, "ERROR")
         return res.send(err)
    }
  },
}