import Image from "next/image";

export default function WhatsApp() {
  const phoneNumber = "972543467722";
  return (
    <main className="fixed bottom-5 right-5 z-50">
      <a href={`https://wa.me/${phoneNumber}`}>
        <Image
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/whatsapp--v1.png"
          alt="whatsapp--v1"
        ></Image>
      </a>
    </main>
  );
}
