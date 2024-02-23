import axios from "axios"

export const add = async (request, response) => {
const url="https://developers.flouci.com/api/generate_payment"
console.log(request.body.amount)
const payload = {
    "app_token": "48012b56-eea3-49ce-b784-9e2f8cef11b6", 
    "app_secret": process.env.FLOUCI_SECRET,
    "amount": request.body.amount,
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "https://bibintunisie.com/success",
    "fail_link": "https://bibintunisie.com/fail",
    "developer_tracking_id": "5e147e5f-af19-464c-8a2b-ba38432c4062"


}

await axios.post(url, payload).then(result => {
    response.send(result.data)
})
.catch(err => console.error(err));


}
export const verifye = async (request, response) => {
const payement_id =request.params.id;
await axios.get(`https://developers.flouci.com/api/verify_payment/${payement_id}`,{

headers:{
    'Content-Type': 'application/json',
    'apppublic': '48012b56-eea3-49ce-b784-9e2f8cef11b6',
    'appsecret': process.env.FLOUCI_SECRET,
}


}).then((result) => {
    response.send(result.data);
}).catch((err) => {
    console.log(err.message)
})


}