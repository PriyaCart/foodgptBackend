const { Configuration, OpenAIApi } = require("openai");
const { toChatML, get_message } = require("gpt-to-chatgpt")
require("dotenv").config();

module.exports = {
    async check(req,res) {
        try{
            const configuration = new Configuration({
                apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);
            
            openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: toChatML('list some famous dishes of kochi. For example famous foods in mulbagal are mulbagal masala dosa, Ragi Mudde, Akki Rotti, kesari bath,paddu, mutton biriyani')
            }).then((data) => {
              console.log((get_message(data.data)));
              return res.send((get_message(data.data)))
            });
                   
                
            }
    catch(error) {
        console.log(error, 'error in calling chat completion');
    };
        
}
}