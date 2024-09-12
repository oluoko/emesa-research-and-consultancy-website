import Footer from "./Footer";
import ContactUsForm from "./ContactUsForm";

const Contacts = () => {
  const mapUrl = `https://www.google.com/maps?q=-1.1848195937575883,36.8957236708013&output=embed`;

  return (
    <div id="contacts " className="screen-container">
      <div className="screen flex flex-col justify-center shadow-md mx-4 w-11/12 mb-10">
        <div className="section-container">
          <section className="left">
            <div className="contacts-text ">
              <h3 className="text-3xl">Where are we located?</h3>
              <br />
              <div className=" font-extrabold text-2xl">
                {" "}
                <p>KAHAWA WEST KWARE PHASE TWO ICPAK</p>
                <p>
                  P.O BOX 2613 - 00100 GPO NAIROBI
                  <br /> || +254 729 682 573 || +254 742 967 422
                </p>
              </div>
              <br />
              <br />
              <p className="text-lg md:text-xl mb-10">
                Embark on a journey of discovery and growth with Emesa Research
                &amp; Consultancy. Let&#39;s build a future of possibilities
                together.
              </p>
            </div>
          </section>
          <section className="right">
            <ContactUsForm />
          </section>
        </div>
        <div
          id="map-container "
          className="w-full h-1/2  relative flex flex-col justify-center items-center"
        >
          <h2 className="mb-8">Visit us today</h2>
          <iframe
            className="w-full  h-96 rounded-lg"
            title="Location Map"
            src={mapUrl}
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
