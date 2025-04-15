const trafficSignalData = [
    {
        id: 0,
        title: "",
        image: '/TrafficSignals/red.png',
        information: `Red. Stop - come to a complete stop before reaching the intersection, stop line or crosswalk, and remain 
            stopped as long as the light is red. During a
            power failure when the signal lights are not operating, a dark (uncovered)
            signal light is to be taken as a stop sign.`
    },
    {
        id: 1,
        image: '/TrafficSignals/yellow.png',
        information: `Yellow. Caution - a steady yellow light is a warning that the light is about
            to change. If the vehicle has not entered the intersection, it should be
            brought to a safe stop. If in the intersection, continue moving and clear it
            safely. Speeding up to "beat the light" is unlawful.`
    },
    {
        id: 2,
        image: '/TrafficSignals/green.png',
        information: `Green. Go - A vehicle may proceed through an intersection in the direction
            indicated by the signal if the roadway is clear.`
    },
    {
        id: 3,
        image: '/TrafficSignals/flashingRed.png',
        information: `Flashing Red Light. A complete stop is required, yielding to oncoming
            traffic or pedestrians, before proceeding when the way is clear. A flashing
            red light at a railroad crossing requires a complete stop even if a train is
            not visible.`
    },
    {
        id: 4,
        image: '/TrafficSignals/flashingYellow.png',
        information: `Flashing Yellow Light. Be alert and proceed with caution. Flashing yellow
            warning beacons are commonly used to draw attention to a sign or a location that requires 
            extra attention or action from drivers.`
    },
    {
        id: 5,
        image: '/TrafficSignals/redArrow.png',
        information: `Red Arrow. Come to a complete stop before reaching the intersection, stop
            line or crosswalk, and remain stopped as long as the arrow is red.`
    },
    {
        id: 6,
        image: '/TrafficSignals/yellowArrow.png',
        information: `Yellow Arrow. A steady yellow arrow is a warning that the light is about
            to change. If the vehicle has not entered the intersection, it should be
            brought to a safe stop. If in the intersection, continue moving in the direction of the arrow and clear it safely. Speeding up to “beat the arrow” is
            unlawful.`
    },
    {
        id: 7,
        image: '/TrafficSignals/flashingYellowArrow.png',
        information: `Flashing Yellow Arrow. If in the proper lane, proceed in the direction of
            the arrow after yielding to approaching traffic and/or pedestrians.`
    },
    {
        id: 8,
        image: '/TrafficSignals/greenArrow.png',
        information: `Green Arrow. If in the proper lane, proceed in the direction of the arrow
            when the roadway is clear.`
    },
    {
        id: 9,
        image: '/TrafficSignals/turningOnRed.png',
        information: `Right turn on red. Turning right at a red light after stopping is allowed,
            unless signs prohibiting it are posted at the intersection.`
    },
    {
        id: 10,
        image: '/TrafficSignals/turningOnRed.png',
        information: `Left turn on red. Turning left at a red light after stopping is allowed only
            if traveling on a one-way street and turning onto another one-way street.
            May be prohibited at certain locations. Watch for signs.`
    },
    {
        id: 11,
        image: '/TrafficSignals/redX.png',
        information: `Never drive in a lane under a red "X" signal.`
    },
    {
        id: 12,
        image: '/TrafficSignals/yellowX.png',
        information: `A steady yellow "X" signal means the driver should move out of the lane
            as soon as safely possible as a red "X" will soon appear.`
    },
    {
        id: 13,
        image: '/TrafficSignals/downwardGreenArrow.png',
        information: `It is permitted to drive in a lane under a downward green arrow symbol`
    },
    {
        id: 14,
        image: '/TrafficSignals/stop.png',
        information: `Stop - Come to a complete stop before entering an intersection. If there is
            a painted stop line, stop at the line. Stop before entering a crosswalk,
            painted or unpainted. If there is no crosswalk, stop at the safest point nearest the intersecting roadway to obtain a clear view of approaching traffic.`
    },
    {
        id: 15,
        image: '/TrafficSignals/yield.png',
        information: `Yield - Slow down or stop, if necessary, to give the right-of-way to crossing or merging vehicles.`
    },
    {
        id: 16,
        image: '/TrafficSignals/speedLimit.png',
        information: `Indicates the maximum speed that a vehicle can lawfully
            travel on the roadway.`
    },
    {
        id: 17,
        image: '/TrafficSignals/noLeftTurn.png',
        information: `No Left Turn - Left turn prohibited.`
    },
    {
        id: 18,
        image: '/TrafficSignals/noRightTurn.png',
        information: `No Right Turn - Right turn prohibited.`
    },
    {
        id: 19,
        image: '/TrafficSignals/noUTurn.png',
        information: `No U-Turn - U-turn prohibited.`
    },
    {
        id: 20,
        image: '/TrafficSignals/wrongWayDoNotEnter.png',
        information: `Wrong Way & Do Not Enter - These signs are often used in combination, and identify a one-way street or expressway ramp. Do not drive
            past either of these signs.`
    },
    {
        id: 21,
        image: '/TrafficSignals/oneWay.png',
        information: `One Way - Traffic flows only in the direction of the arrow`
    },
    {
        id: 22,
        image: '/TrafficSignals/noParking.png',
        information: `No Parking - Parking is prohibited.`
    },
    {
        id: 23,
        image: '/TrafficSignals/centerLaneLeftTurnOnly.png',
        information: `Center Lane, Left Turn Only - A driver may use the lane only to make
            a left turn.`
    },
    {
        id: 24,
        image: '/TrafficSignals/keepRight.png',
        information: `Keep Right - A traffic island, median or obstruction is ahead. Keep to the
            right.`
    },
    {
        id: 25,
        image: '/TrafficSignals/slowerTrafficKeepRight.png',
        information: `Slower Traffic Keep Right - These signs are used on multiple-lane roadways to reduce unnecessary weaving and when there is a tendency on the
            part of the motorist to drive in the left-hand lane (or lanes) below the normal speed of traffic.`
    },
    {
        id: 26,
        image: '/TrafficSignals/signalAhead.png',
        information: `Signal Ahead - Traffic signal is ahead. Be prepared to stop.`
    },
    {
        id: 27,
        image: '/TrafficSignals/reduceSpeedAhead.png',
        information: `Reduce Speed Ahead - Informs motorists of a reduced speed zone.`
    },
    {
        id: 28,
        image: '/TrafficSignals/stopAhead.png',
        information: `Stop Ahead - Approaching a stop sign.`
    },
    {
        id: 29,
        image: '/TrafficSignals/yieldAhead.png',
        information: `Yield Ahead - Approaching a yield sign.`
    },
    {
        id: 30,
        image: '/TrafficSignals/dividingHighwayBegins.png',
        information: `Divided Highway Begins - The traffic lanes ahead are divided by a
            median or divider and each lane is one-way. Keep to the right.`
    },
    {
        id: 31,
        image: '/TrafficSignals/dividingHighwayEnds.png',
        information: `Divided Highway Ends - The oncoming traffic lane ahead is no longer
            divided by median or divider. Keep to the right.`
    },
    {
    id: 32,
    image: '/TrafficSignals/twoWayTraffic.png',
    information: `Yield Ahead - Approaching a yield sign.`
    },
    {
        id: 33,
        image: '/TrafficSignals/pedestrianCrossing.png',
        information: `Pedestrian Crossing - Be alert for people crossing the street. Slow down,
            yield right of way to pedestrians, or stop if necessary.`
    },
    {
        id: 34,
        image: '/TrafficSignals/bicycle.png',
        information: `Bicycle - Be alert for bicyclists crossing the street.`
    },
    {
        id: 35,
        image: '/TrafficSignals/reverseTurn.png',
        information: `Reverse Turn - Just ahead, the road turns sharply right, then left. May be
            shown as left or right`
    },
    {
        id: 36,
        image: '/TrafficSignals/reverseCurve.png',
        information: `Reverse Curve - Just ahead, the road curves right, then left. May be shown
            as left or right.`
    },
    {
        id: 37,
        image: '/TrafficSignals/curve.png',
        information: `Curve - There is a gradual curve to the right ahead. Slow down to the safe
            speed indicated. May be shown as left or right`
    },

];

export default trafficSignalData;