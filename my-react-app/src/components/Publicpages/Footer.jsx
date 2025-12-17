export default function Footer() {

  const usefullLinks = ["About", "Contact", "Privacy", "Terms & Condition"];

  const officeAdress = [{
      contact: 9866667073,
      adress: {
          Location: "24/36 Ambedkar Nagar",
          Area: "Venkatagiri",
          District: "Tirupathi",
          Pincode: 524132,
          State: "Andhra Pradesh"
      }
  }];

  const detaillink = usefullLinks.map((details, index) => (
      <li key={index} className="hover:text-[#f07f92] transition-colors cursor-pointer">
        {details}
      </li>
  ));

  const adressDetails = officeAdress.map((item, index) => (
      <ul key={index} className="space-y-1 text-gray-200">
          <li><b>Contact:</b> {item.contact}</li>
          <li><b>Location:</b> {item.adress.Location}</li>
          <li><b>Area:</b> {item.adress.Area}</li>
          <li><b>District:</b> {item.adress.District}</li>
          <li><b>Pincode:</b> {item.adress.Pincode}</li>
          <li><b>State:</b> {item.adress.State}</li>
      </ul>
  ));

  return (
      <footer className="bg-[#7f576e] text-white py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          {/* Office Address */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Office Address</h2>
            {adressDetails}
          </div>

          {/* Useful Links */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2 text-gray-200 text-lg">
              {detaillink}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white/30 pt-4 text-center text-gray-200">
          &copy; {new Date().getFullYear()} Schola. All rights reserved.
        </div>
      </footer>
  );
}
