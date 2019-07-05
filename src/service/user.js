import { executeSQL } from "../db/client";

const fetchUsers = async () => {
  const result = await executeSQL(`SELECT * FROM HR.EMPLOYEES WHERE ROWNUM <= :1`, [10]);

  const users = result.rows.map((row) => ({
    id: row.EMPLOYEE_ID,
    first_name: row.FIRST_NAME,
    last_name: row.LAST_NAME,
    email: row.EMAIL,
    hire_date: row.HIRE_DATE,
    salary: row.SALARY,
    phone_number: row.PHONE_NUMBER,
    job_id: row.JOB_ID
  }));


  return users;
}

const fetchJob = async (job_id) => {
  const result = await executeSQL(`SELECT * FROM HR.JOBS WHERE JOB_ID = :1`, [job_id]);
  const resultObj = result.rows[0];

  return {
    id: resultObj.JOB_ID,
    title: resultObj.JOB_TITLE,
    min_salary: resultObj.MIN_SALARY,
    max_salary: resultObj.MAX_SALARY
  }
}


export { fetchUsers, fetchJob };