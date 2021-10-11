test("should take courses cheaper 160", () => {
  const courses: Array<CoursesType> = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 140}
  ];

  const cheapCourses = courses.filter(course => course.price < 160);

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe("CSS");
  expect(cheapCourses[1].title).toBe("REACT");
});


test.skip("get only completed tasks", () => {
  const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Meat", isDone: true},
    {id: 3, title: "Beer", isDone: false},
    {id: 4, title: "Sugar", isDone: true}
  ];

  const completedTasks = tasks.filter(task => task.isDone);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].id).toBe(2);
  expect(completedTasks[1].id).toBe(4);
});