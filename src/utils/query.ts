import { gql } from "@apollo/client";
///attendance
export const ADD_ATTENDANCE = gql`
  mutation InsertAttendance(
    $date: date
    $inTime: String
    $outTime: String
    $userId: uuid
  ) {
    insert_attendance_one(
      object: {
        user_id: $userId
        date: $date
        in_time: $inTime
        out_time: $outTime
      }
    ) {
      date
      out_time
      in_time
      id
      user_id
    }
  }
`;

export const GET_CURRENT_DATE_IN_TIME = gql`
  query GetCurrentDateIn($date1: date, $date2: date, $userId: uuid) {
    attendance(
      limit: 7
      where: { date: { _gte: $date1, _lte: $date2 }, user_id: { _eq: $userId } }
      order_by: { date: desc }
    ) {
      date
      in_time
      out_time
      avg_work_min
    }
  }
`;
export const UPDATE_OUT_TIME = gql`
  mutation UpdateAttendence(
    $userId: uuid
    $date: date
    $outTime: String
    $avgWorkTime: bigint
  ) {
    update_attendance(
      where: { user_id: { _eq: $userId }, date: { _eq: $date } }
      _set: { out_time: $outTime, avg_work_min: $avgWorkTime }
    ) {
      returning {
        out_time
        in_time
        date
        avg_work_min
      }
    }
  }
`;
export const GET_SINGLE_USER = gql`
  query UserQuery($userId: uuid!) {
    user(id: $userId) {
      email
      avatarUrl
      metadata
    }
  }
`;
export const GET_ALL_USER = gql`
  query GetAllUser {
    users {
      id
      metadata
    }
  }
`;
export const ADD_EMPLOYEE = gql`
  mutation MyMutation(
    $userId: uuid
    $bloodGroup: String
    $designation: String
    $dob: date
    $age: Int
    $reportingManeger: uuid
  ) {
    insert_employee_details_one(
      object: {
        user_id: $userId
        blood_group: $bloodGroup
        designation: $designation
        age: $age
        reporting_maneger: $reportingManeger
        dob: $dob
      }
    ) {
      designation
    }
  }
`;
export const GET_USER_ROLe = gql`
  query MyQuery($userId) {
    user(id: $userId) {
      defaultRole
    }
  }
`;
