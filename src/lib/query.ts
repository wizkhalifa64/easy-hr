import { gql } from "@apollo/client";
///attendance
export const ADD_ATTENDANCE = gql`
  mutation (
    $userid: String!
    $name: String!
    $date: String!
    $in: String
    $out: String
  ) {
    insert_attendance_one(
      object: {
        name: $name
        date: $date
        intime: $in
        outtime: $out
        userId: $userid
      }
    ) {
      name
      userId
    }
  }
`;
