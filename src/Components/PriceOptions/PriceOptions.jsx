import PriceOption from "../../priceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Access to locker room and showers"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$50/month",
          "features": [
            "Access to all basic membership features",
            "Group fitness classes included",
            "Personalized workout plan"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$80/month",
          "features": [
            "Access to all standard membership features",
            "Access to sauna and steam room",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": "$25/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Valid student ID required"
          ]
        },
        {
          "id": 5,
          "name": "Family Membership",
          "price": "$100/month",
          "features": [
            "Access for up to 4 family members",
            "Access to all standard membership features",
            "Childcare services available"
          ]
        },
        {
          "id": 6,
          "name": "Senior Membership",
          "price": "$20/month",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Ages 65+"
          ]
        }
]
    return (
       <div>
        <h2 className="text-5xl">Best Prices in the town</h2>
        {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
       </div>
    );
};

export default PriceOptions;