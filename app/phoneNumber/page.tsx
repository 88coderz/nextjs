
export default function PhoneNumberInput () {

return  (
    <form action = { handleSubmit }  >
        <label>Phone Number:</label>
        <input 
            id='phoneNumber'
            type='tel'                
            value = { phoneNumber }
            onChange = { handleInputChange }
            
            required />

        <button type="submit" > Submit </button> 
    </form>
    )
}