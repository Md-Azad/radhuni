const ContactForm = () => {
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone*</span>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            placeholder="Bio"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send"
          className="btn w-full md:w-1/5 mx-auto bg-yellow-500 text-xl text-white"
        />
      </form>
    </div>
  );
};

export default ContactForm;
