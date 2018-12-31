import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';




export default class App extends React.Component {
  componentDidMount() {
  this.handleEnd = this.handleEnd.bind(this);
}

handleEnd({ steps, values }) {
  var score = 0;
  var word;
  // console.log(steps);
  // console.log(values);
  score = values[0]+values[1];
  if(score <= 5){word = "คุณไม่ได้ป่วยเป็นโรคซึมเศร้า"}
  else if(score > 5 ) {word = "คุณมีโอกาสเป็นโรคซึมเศร้า โปรดติดต่อ อาบอบนวด หายเศร้าแน่นอน"}
  else{ word = "ไม่ทราบ"}

  alert(`คะแนน ที่คุณได้: ${score}  ${word}`);
}
  render() {
    return (



      <ChatBot
        handleEnd={this.handleEnd}
        steps={[
          {
            id: '1',
            message: 'อาการเป็นไงบ้างหมอสิ',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'นอนไม่หลับ', trigger: '3' },
              { value: 2, label: 'คิดมากตลอดเวลา', trigger: '3' },
              { value: 3, label: 'คิดสั้น', trigger: '3' },
              { value: 4, label: 'คิดยาว', trigger: '3' },
              { value: 5, label: 'อยากฆ่าตัวตาย', trigger: '3' },
            ],
          },
          {
            id: '3',
            message: 'ตอนนี้อยากทำอะไร',
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 2, label: 'อยากนอนเปื่อยๆ', trigger: '5' },
              { value: 8, label: 'กุฆ่าตัวตาย', trigger: '5' },

            ],
          },
          {
            id: '5',
            message: 'รายงานผล อาการผู้ป่วย',
            end: true,
          },
        ]}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
