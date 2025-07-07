import Card from "../components/Card";
import ContactFrom from "../components/ContactFrom";

function Contact() {
  return (
    <div className="w-screen overflow-x-hidden overflow-y-auto">
      <div className="w-screen relative">
        <img
          className="w-[96.2%] h-[45vh] object-cover opacity-50"
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&auto=format&fit=crop&q=60"
          alt=""
        />
        <h1 className="text-zinc-300 absolute text-7xl uppercase  top-[35%] left-1/2 -translate-x-1/2 text-center max-w-[90%] break-words">
          Contact us... !
        </h1>
      </div>
      <div className="flex mt-5 justify-around">
        {<Card/>}
        {<ContactFrom/>}
      </div>
    </div>
  );
}

export default Contact;