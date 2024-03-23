import React from 'react';
import { View, Text } from 'react-native';

export default function Longdee(props) {
const MyComponent = () => {
  // สร้างวัตถุ Date สำหรับวันที่และเวลาปัจจุบัน
  const currentDate = new Date();

  // แยกข้อมูลวันที่ออกมา
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // เดือนจะเริ่มนับที่ 0 จึงต้องบวกเพิ่ม 1
  const year = currentDate.getFullYear();

  // กำหนดรูปแบบของวันที่ในรูปแบบข้อความ
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <View>
      <Text>วันที่ปัจจุบัน: {formattedDate}</Text>
    </View>
  );
};
}
