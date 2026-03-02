export default function Map() {
    return (
        <div>
            <h1>Map</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13365.666186880651!2d49.85866570589934!3d40.418271521351244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1772466040418!5m2!1sru!2saz"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full min-h-screen h-full"/>
        </div>
    )
}