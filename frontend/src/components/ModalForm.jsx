import React from "react";

export default function ModalForm({ mode, isOpen, onClose, OnSubmit }) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [job, setJob] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [status, setStatus] = React.useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === 'Active');
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg py-4 text-center">
              {mode === "edit" ? "Edit Client" : "Client Details"}
            </h3>

            <form method="dialog" onSubmit={handelSubmit} className="flex flex-col items-center gap-4">
              {/* Username */}
              <label className="input validator w-full max-w-md">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input type="text" required placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>

              {/* Email */}
              <label className="input validator w-full max-w-md">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>

              {/* Job */}
              <label className="input w-full max-w-md gap-2">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 2h4a2 2 0 012 2v2h2a2 2 0 012 2v2H4V8a2 2 0 012-2h2V4a2 2 0 012-2zm10 10v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6h16z"
                  />
                </svg>
                <input type="text" placeholder="Job title" value={job} onChange={(e) => setJob(e.target.value)} required />
              </label>

              {/* Rate + Status */}
              <div className="flex gap-4 w-full max-w-md">
                <label className="input validator w-1/2">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    />
                  </svg>
                  <input type="number" placeholder="Rate per hour" value={rate} onChange={(e) => setRate(e.target.value)} required />
                </label>

                <select
                  defaultValue="Status"
                  className="select select-bordered w-1/2"
                  value={status ? 'Active' : 'Inactive'}
                  onChange={handleStatusChange}
                >
                  <option disabled={true}>Status</option>
                  <option>Inactive</option>
                  <option>Active</option>
                </select>
              </div>

              {/* Close + Submit buttons */}
              <div className="flex justify-end items-center w-full max-w-md gap-2">
                <button
                  onClick={onClose}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  type="button"
                >
                  x
                </button>

                <button type="submit" className="btn btn-success w-full" >
                  {mode === "edit" ? "Save Changes" : "Add Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
