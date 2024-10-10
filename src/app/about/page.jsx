import Link from "next/link";

export default function About() {
  return (
    <main
      className="flex flex-col rtl text-right items-right justify-start p-4 gap-6 md:pl-60 md:pr-60"
      dir="rtl"
    >
      <header className="text-lg font-medium md:text-2xl">ללבוש רגעים, להשאיר חותם</header>
      <section className="md:text-xl">
        לכולנו יש את החלום להיראות מהממות באירועים הכי חשובים, בלי לשלם על זה את
        כל המשכורת! בדיוק בגלל זה הקמתי את העסק הזה - שמלות ערב מעוצבות בסטייל
        ייחודי שמחכות רק לכן, במחירים משתלמים.
      </section>
      <section className="md:text-xl">
        נמאס לך להוציא אלפי שקלים על שמלה שתלבשי פעם אחת? עולם השכרת השמלות כאן
        בשבילך! בחרנו את מיטב השמלות ממותגים ומעצבי על בארץ ובחו״ל, כדי שתוכלי
        ליהנות מהמראה המושלם במחיר הוגן.
      </section>
      <div
        className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          בחרי את השמלה שלך
        </h2>
        <p className="text-gray-700 text-center mb-6">
          היכנסי לקטגוריית <span className="font-semibold">Dresses</span> שלנו
          ותמצאי מגוון עצום של סגנונות וגזרות.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">צרי קשר לייעוץ:</h3>
          <p className="text-gray-600">
            מתלבטת? צרי איתנו קשר ונעזור לך לבחור את השמלה המושלמת.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">שמרי לך את התאריך:</h3>
          <p className="text-gray-600">
            כל מה שנשאר לך זה לקבוע את מועד ההשכרה, ולחכות לרגע הגדול.
          </p>
        </div>
        <div className="text-center pt-4">
          <Link
            href="/dress"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            היכנסי לקטלוג עכשיו
          </Link>
        </div>
      </div>
    </main>
  );
}
