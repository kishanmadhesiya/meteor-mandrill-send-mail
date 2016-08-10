import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
            
                var mandrillUserName = "---Your Registered Email Id of Mandrill---";
                var mandrillApiKey = "---Your Mandrill API Key---";
                // code to run on server at startup

                Mandrill.config({
                username: mandrillUserName,
                        key: mandrillApiKey
                });
                Meteor.setTimeout(function(){
                Meteor.call("sendMandrillEmail");
                }, 3000);
        });
        Meteor.methods({

        sendMandrillEmail : function (){
        var sendToEmailAddress = "kishan@cybuzzsc.com";
                var fromEmailAddress = "---Your Registered Email Id of Mandrill---";
                console.log("sending email...");
                var result = Mandrill.messages.sendTemplate({

                template_name: 'email-template', // open your mandrill account and goto outbound > templates and create a template named email-template and publish
                        template_content: [
                        {
                        name: 'body',
                                content: 'content'
                        }
                        ],
                        message: {
                        subject: '---Your Subject---',
                                from_email: fromEmailAddress,
                                to: [
                                { email: sendToEmailAddress }
                                ],
                                html: "---Your Content---",
                        }
                });
                console.log(result.data[0].status);
        }

        });