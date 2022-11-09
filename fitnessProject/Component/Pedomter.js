import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect, moment} from 'react'
import GoogleFit, { BucketUnit, adjustment} from 'react-native-google-fit';

const Pedomter = () => {

    useEffect(() => {
        try{
        fetchData() 
        }
        catch{
            console.log("Request could not be made");
        }

       }, []);

    const opt = {
        startDate: "2022-11-01T00:00:17.971Z", // required ISO8601Timestamp
        endDate : "2022-11-07T00:00:17.971Z",
       // endDate: new Date().toISOString(),// required ISO8601Timestamp
        
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1. 
      };
      
      GoogleFit.getDailyStepCountSamples(opt)
       .then((res) => {
           console.log('Daily steps >>> ', res)
       })
       .catch((err) => {console.warn(err)});
      
      // or with async/await syntax

        async function fetchData() {
            const res = await GoogleFit.getDailyStepCountSamples(opt)
           console.log(res);

          }
     
      
      
      // shortcut functions, 
      // return weekly or daily steps of given date
      // all params are optional, using new Date() without given date, 
      // adjustment is 0 by default, determine the first day of week, 0 == Sunday, 1==Monday, etc.
      GoogleFit.getDailySteps("2022-11-01T00:00:17.971Z").then().catch()
     // GoogleFit.getWeeklySteps(Date, adjustment).then().catch()

  return (
    <View>
      <Text>Pedomter</Text>
      
    </View>
  )
}

export default Pedomter

const styles = StyleSheet.create({})
