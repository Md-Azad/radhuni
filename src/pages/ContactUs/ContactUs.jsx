import Cover from "../sharedPages/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdAccessTime, MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <div>
      <Cover
        coverImg={contactImg}
        hight={500}
        title="contact us"
        subTitle="Feel free to contact us in any issues or discusstion."
      ></Cover>
      <SectionTitle heading="Our Location" subHeading="Visit Us"></SectionTitle>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto">
        <div className="h-36 border">
          <div className="bg-[#D1A054] w-full py-2 ">
            <MdOutlinePhoneInTalk className="mx-auto text-xl" />
          </div>
          <div className="bg-gray-200 w-10/12 mx-auto h-3/5 text-center mt-2  ">
            <h1>Phone: </h1>
            <p>+4921456845</p>
          </div>
        </div>
        <div className="h-36 border">
          <div className="bg-[#D1A054] w-full py-2 ">
            <CiLocationOn className="mx-auto text-xl" />
          </div>
          <div className="bg-gray-200 w-10/12 mx-auto h-3/5 text-center mt-2  ">
            <h1>Address </h1>
            <p>11/1234F Khilkhet, Dhaka</p>
          </div>
        </div>
        <div className="h-36 border">
          <div className="bg-[#D1A054] w-full py-2 ">
            <MdAccessTime className="mx-auto text-xl " />
          </div>
          <div className="bg-gray-200 w-10/12 mx-auto h-3/5 text-center mt-2  ">
            <h1>WORKING HOURS </h1>
            <p>Mon - Fri: 08:00 - 22:00 </p>
            <p>Sat - Sun: 10:00 - 23:00 </p>
          </div>
        </div>
      </section>
      <SectionTitle
        heading="Contact from"
        subHeading="Send Us A message"
      ></SectionTitle>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactUs;
