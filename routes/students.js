import {Router} from "express"

const router = new Router();
const students = [];

router.get("/students", (req, res) => {
  res.json(students);
});

router.post("/students", (req, res) => {
  students.push(req.body);
  res.json({
    status: "created",
    data: students
  })
});

router.delete("/students/:id", (req, res) => {
  const index = students.findIndex((student) => student.id == req.params.id);
  let response = {
    status: "not found",
    data: students
  };
  if(index !== -1) {
    students.splice(index, 1);
    response.status = "deleted";
  }
  res.json(response);
});

router.put("/students", (req, res) => {
    if(!req.body.id) {
      return res.json({
        status: "error",
        message: "ID not found",
        data: students
      })
    }
    const index = students.findIndex((item) => item.id == req.body.id);
    console.log(req.body.id, students);
    students[index] = {
      ...students[index],
      ...req.body
    };
    console.log(index);
    res.json({
      status: "updated",
      data: students
    })
  }
);

export default router;
