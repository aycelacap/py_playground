number = "MB3D5LO782" 

tracking_service = case number
   when /^.Z/ then :ups  #(^) doesnt this mean that number cannot have “Z”
   when /^Q/ then :dhl
   when /^96.{20}$/ then :fedex #(^) does this apply to numbers too? Also, does this mean ‘{}’  numbers of times?
   when /^[HK].{10}$/ then :ups  #[HK] if this denotes range that we cannot use how come my test failed?
end

p tracking_service