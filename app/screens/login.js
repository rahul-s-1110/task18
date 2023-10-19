import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useMemo, useRef, useState } from "react";
import OtpBox from "../component/otpBox";
import { AuthContext } from "../gloablConstant/context";

const Login = () => {
  const [number, setNumber] = useState("");
  const [otpEnable,setOtpEnable] = useState(false);
  const [verificationID,setVerificationID] = useState(null);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
  const { signIn} = useContext(AuthContext);

  useMemo(()=>{
    if(number.length == 10){
        console.log("called api")
        Alert.alert("otp has been sent")
        setOtpEnable(true)
        // Otp method call
    }
  },[number])

  function handleKeyPress(value, pos) {
    if (
      value == 1 ||
      value == 2 ||
      value == 3 ||
      value == 4 ||
      value == 5 ||
      value == 6 ||
      value == 7 ||
      value == 8 ||
      value == 9 ||
      value == 0
    ) {
      switch (pos) {
        case 1: {
          setOtp1();
          setOtp1(value);
          break;
        }
        case 2: {
          setOtp2();
          setOtp2(value);
          break;
        }
        case 3: {
          setOtp3();
          setOtp3(value);
          break;
        }
        case 4: {
          setOtp4();
          setOtp4(value);
          break;
        }
        case 5: {
          setOtp5();
          setOtp5(value);
          break;
        }
        case 6: {
          setOtp6();
          setOtp6(value);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  function handleTextChange(e, pos) {
    switch (pos) {
      case 1: {
        setOtp1(e);
        if (e.length === 1) {
          if (otp2 == '') {
            input2.current.focus();
          }
        } else if (e.length === 0) {
          //refOtp1.current.blur();
        }
        break;
      }
      case 2: {
        setOtp2(e);
        if (e.length === 1) {
          if (otp3 == '') {
            input3.current.focus();
          }
        } else if (e.length === 0) {
          if (otp1 != '' && otp3 == '') {
            input1.current.focus();
          } else {
            input2.current.focus();
          }
        }
        break;
      }
      case 3: {
        setOtp3(e);
        if (e.length === 1) {
          if (otp4 == '') {
            input4.current.focus();
          }
        } else if (e.length === 0) {
          if (otp2 != '' && otp4 == '') {
            input2.current.focus();
          } else {
            input3.current.focus();
          }
        }
        break;
      }
      case 4: {
        setOtp4(e);
        if (e.length === 1) {
          if (otp5 == '') {
            input5.current.focus();
          }
        } else if (e.length === 0) {
          if (otp3 != '' && otp5 == '') {
            input3.current.focus();
          } else {
            input4.current.focus();
          }
        }
        break;
      }
      case 5: {
        setOtp5(e);
        if (e.length === 1) {
          if (otp6 == '') {
            input6.current.focus();
          }
        } else if (e.length === 0) {
          if (otp4 != '' && otp6 == '') {
            input4.current.focus();
          } else {
            input5.current.focus();
          }
        }
        break;
      }
      case 6: {
        setOtp6(e);
        if (e.length === 1) {
          if (otp6 == '') {
            input6.current.focus();
          }
        } else if (e.length === 0) {
          if (otp5 != '') {
            input5.current.focus();
          } else {
            input1.current.focus();
          }
        }
        break;
      }

      default: {
        break;
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        value={number}
        maxLength={10}
        onChangeText={setNumber}
        placeholder="Enter Mobile Number"
        style={styles.inputBox}
      />
    {otpEnable && 
    <View >
<View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width:"90%"
        }}
      >
        <OtpBox
          reference={input1}
          value={otp1}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key.valueOf(), 1)}
          onChangeText={(text) => handleTextChange(text, 1, "")}
        />
        <OtpBox
          reference={input2}
          value={otp2}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key.valueOf(), 2)}
          onChangeText={(text) => handleTextChange(text, 2, "")}
        />
        <OtpBox
          reference={input3}
          value={otp3}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key.valueOf(), 3)}
          onChangeText={(text) => handleTextChange(text, 3, "")}
        />
        <OtpBox
          reference={input4}
          value={otp4}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key.valueOf(), 4)}
          onChangeText={(text) => handleTextChange(text, 4, "")}
        />
        <OtpBox
          reference={input5}
          value={otp5}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key.valueOf(), 5)}
          onChangeText={(text) => handleTextChange(text, 5, "")}
        />
        <OtpBox
          reference={input6}
          value={otp6}
          onKeyPress={(e) => handleKeyPress(e.nativeEvent.key.valueOf(), 6)}
          onChangeText={(text) => handleTextChange(text, 6, "")}
        />
      </View>
      <Pressable >
        <Text>Validate Otp</Text>
      </Pressable>

    </View>
        
      }
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputBox: {
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
  },
  otpInputBox: {},
});
