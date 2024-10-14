import Image from 'next/image'; 

export default function Footer() {
  return (
    <footer className="text-sm flex flex-col justify-start p-4 pl-0 pr-0">
      <hr className="w-full border-gray-300 mb-2" />
      <section className="flex gap-6 justify-between pl-3 pr-3">
        <section className="flex flex-row gap-1 items-center">
          <Image
            src="https://img.icons8.com/material-outlined/24/copyright.png"
            alt="copyright"
            width={24} 
            height={24} 
            className="h-4 w-4" 
          />
          <p className="text-gray-600">Owned by Neriya Abutbul 2025</p>
        </section>
        <section className="flex flex-row gap-1 items-center">
          <Image
            src="https://img.icons8.com/material-outlined/24/place-marker--v1.png"
            alt="place-marker--v1"
            width={24} 
            height={24} 
            className="h-4 w-4" 
          />
          <p className="text-gray-600 font-bold">Be&apos;er Sheva</p>
        </section>
      </section>
    </footer>
  );
}
