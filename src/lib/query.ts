import { gql } from "@apollo/client";
///attendance
export const ADD_ATTENDANCE = gql`
  mutation (
    $userid: String!
    $name: String!
    $date: date!
    $in: String!
    $out: String!
  ) {
    insert_attendance_one(
      object: {
        intime: $in
        outtime: $out
        userId: $userid
        name: $name
        date: $date
      }
    ) {
      name
      userId
    }
  }
`;
export const MY_QUERY_QUERY = gql`
  query MyQuery {
    attendance {
      name
      intime
    }
  }
`;
