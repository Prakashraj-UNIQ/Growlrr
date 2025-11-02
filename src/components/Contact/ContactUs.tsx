import InputWithIcon from "../ui/Input";
// import {  Mail,  Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="sm:px-10 md:px-20 bg-gray-50 ">
      <div className="pt-8 sm:pt-0">
        <form className="flex flex-col gap-5 p-4 sm:p-6 items-center justify-center">
          <div className="text-center">
          <h1 className="text-3xl font-bold text-brandBlue mb-2">Contact Us</h1>
          <p className="text-gray-600 text-base text-center sm:text-start">
            Reach out to Growlrr for any questions about pet nutrition,
            partnerships, or customer support.
          </p>

          </div>
          <InputWithIcon icon="user" placeholder="Full Name" />
          <InputWithIcon icon="mail" type="email" placeholder="Email" />
          <InputWithIcon icon="phone" placeholder="Mobile Number" />
          <InputWithIcon
            icon="message"
            placeholder="Write your message..."
            multiline
          />
          <div>
            <button className="cursor-pointer px-5 py-2 bg-brandOrange text-white rounded-full">
              Send a Message
            </button>
          </div>
        </form>
      </div>
      {/* <div className="border border-gray-300 bg-white rounded-lg m-10 p-10 flex flex-col gap-8">
        <h1 className="text-xl text-brandBlue text-xl font-medium"> Growlrr Foods Pvt Ltd. </h1>
        <p className="text-gray-600 flex items-center gap-2"><MapPin />W-379A, East Main Road, Anna Nagar West Extn, Chennai 600101</p>
        <p className="text-gray-600 flex items-center gap-2"><Mail/>info@growlrr.com</p>
        <p className="text-gray-600 flex items-center gap-2"><Phone/>+91 90000 00000</p>
        <div>
          <button className="cursor-pointer px-5 py-2 border border-brandBlue text-brandBlue font-medium rounded-full">View Location</button>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
