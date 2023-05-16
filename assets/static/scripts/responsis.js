function getBotResponse(input) {

    // Simple responses
    if (input == "hello") {
        return "Hello there! Enter your mobile no. for any queries";
    } else if (input == "Thanks") {
        return "Talk to you later!";
    } else if (input == Number){
        return "Thanks providing the mobile no. associated with your registered account. Now you can submit your query"
    } else if(input == "Loved enviro+"){
        return "Thanks for sharing the feedback with us:)"
    } else {
        return "Our agent will call you within 24 hours related to your query Submit your query if the query is submited ignore this message please"
    }
}
