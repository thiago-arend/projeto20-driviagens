export async function insertPassenger(req, res) {
    const {firstName, lastName} = req.body;
  
    try {
      //await employeesRepository.insert({ ...employee, grossSalary: salaryInCents });
  
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }