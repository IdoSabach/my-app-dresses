export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">צור קשר</h3>
        <p>נשמח לשמוע ממך! השאירי פרטים או צרי קשר באחת מהדרכים הבאות:</p>

        {/* רשתות חברתיות */}
        <div className="flex justify-center space-x-4 my-4">
          <a href="https://www.facebook.com" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="https://www.instagram.com" className="hover:text-pink-500">
            Instagram
          </a>
          <a href="https://wa.me/your-number" className="hover:text-green-500">
            WhatsApp
          </a>
        </div>

        {/* טופס יצירת קשר */}
        <form className="flex flex-col items-center space-y-4 mb-6">
          <input
            type="text"
            placeholder="שם"
            className="w-full max-w-xs p-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="דוא"
            className="w-full max-w-xs p-2 rounded-lg"
          />
          <textarea
            placeholder="הודעה"
            className="w-full max-w-xs p-2 rounded-lg"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            שלחי הודעה
          </button>
        </form>

        {/* המלצה קצרה או מוטו */}
        <p className="italic text-gray-300 mb-4">
          אנחנו כאן ללוות אותך בדרך לשמלה המושלמת!
        </p>
      </div>
    </footer>
  );
}
