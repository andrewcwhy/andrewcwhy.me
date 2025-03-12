function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-gray-600">
        Feel free to reach out to me for any collaboration, questions, or networking opportunities.
      </p>
      <div className="mt-6">
        <p className="text-lg text-gray-700 font-semibold">Email:</p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-500 hover:underline text-lg"
        >
          your.email@example.com
        </a>
      </div>
      <div className="mt-4">
        <p className="text-lg text-gray-700 font-semibold">LinkedIn:</p>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          linkedin.com/in/yourprofile
        </a>
      </div>
      <div className="mt-4">
        <p className="text-lg text-gray-700 font-semibold">GitHub:</p>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          github.com/yourgithub
        </a>
      </div>
    </div>
  );
};

export default Contact;