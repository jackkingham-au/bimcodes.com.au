const client = require('@mailchimp/mailchimp_marketing'); 

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us14'
});

exports.handler = async (event) => {
    const person = JSON.parse(event.body);

    try {
        const addSubscriber = async () => {
            const response = await client.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
                email_address: person.email.value,
                status: "subscribed",
                merge_fields: {
                    'FNAME': person.name.value.toUpperCase(),
                }   
            });
            
            return response;
        };
          
        const result = await addSubscriber();

        return {
            statusCode: 200,
            body: JSON.stringify({result})
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify({error})
        }
    }
    

    
}