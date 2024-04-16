enum GENDER {
    MALE,
    FEMALE,
  }
  interface INVITEE {
    id: number;
    name: string;
    gender: GENDER;
  }
  export  {GENDER, type INVITEE}