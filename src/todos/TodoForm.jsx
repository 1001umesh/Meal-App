import { Formik } from "formik";
const TodoForm = () => {
  return (
    <div className="py-5 px-6 border-2 border-gray-300 rounded mx-6 my-5 w-[500px]">
      <Formik
        initialValues={{
          email: "",
          username: "",
          gender: "",
          hobbies:[],
        }}
        onSubmit={(val, { resetForm }) => {
          console.log(val);
          resetForm();
        }}
      >
        {({ handleChange, touched, handleSubmit, values, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center my-4">
                <div>
                  <h1 className="text-lg font-bold ">Add Some Your Todos</h1>
                  <p className="text-md text-gray-400">
                    enter your detail below to add todo
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  className=" border border-gray-300 mx-2 my-2 px-2 py-2 w-full rounded block"
                  id="email"
                  type="email"
                  placeholder="u@gmail.com"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  className=" border border-gray-300 mx-2 my-2 px-2 py-2 w-full rounded block"
                  id="username"
                  type="text"
                  placeholder="umesh...."
                  onChange={handleChange}
                  value={values.username}
                />
              </div>
              <div className="flex  gap-4 my-4">
                <p>Select Gender</p>
                <div className="flex items-center gap-2">
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    onChange={handleChange}
                    value="male"
                  />
                </div>

                <div className="flex items-center gap-2 ">
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    onChange={handleChange}
                    value="female"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="others">Others</label>
                  <input
                    type="radio"
                    name="gender"
                    id="others"
                    onChange={handleChange}
                    value="others"
                  />
                </div>
              </div>
              <div className="flex gap-2 my-4">
                <p>Select Your Hobbies</p>
                <div>
                  <input type="checkbox" id="travelling" name="hobbies" value="travelling" onChange={handleChange} />
                  <label htmlFor="travelling">Travelling</label>
                </div>
                <div>
                  <input type="checkbox" id="reading" name="hobbies" value="reading" onChange={handleChange} />
                  <label htmlFor="reading">Reading</label>
                </div>
                <div>
                  <input type="checkbox" id="coding" name="hobbies" value="coding" onChange={handleChange} />
                  <label htmlFor="coding">Coding</label>
                </div>
                <div>
                  <input type="checkbox" id="others" name="hobbies" value="others" onChange={handleChange} />
                  <label htmlFor="others">Others</label>
                </div>
              </div>

              <button
                type="submit"
                className=" bg-blue-800 mx-2 my-3 py-2 px-2 w-full rounded cursor-pointer text-white hover:bg-blue-900"
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TodoForm;
