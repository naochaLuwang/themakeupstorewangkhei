// components/GoogleMap.js
const Map = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.826387119156!2d93.94723717562118!3d24.801397747617898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927983b76022d%3A0xf03af92e4b97f34!2sThe%20Makeup%20Store%20Wangkhei!5e0!3m2!1sen!2sin!4v1726941290699!5m2!1sen!2sin"
        width="100%"  // Set to 100% for responsive design
        height="100%" // Set to 100% for responsive design
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
