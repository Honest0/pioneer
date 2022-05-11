import React from 'react'

import { Colors } from '@/common/constants'

import { Icon, StyledIcon } from '../Icon'

export const CherryIcon = React.memo(({ className }: StyledIcon) => (
  <Icon
    size="24"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    color="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1797 3.79293C15.6392 4.09929 15.7634 4.72016 15.457 5.17968C14.6777 6.34872 14.0567 8.0746 13.6879 9.76053C13.5056 10.5941 13.3907 11.3915 13.3466 12.0724C13.3013 12.7724 13.3354 13.2807 13.4077 13.5699C13.5417 14.1057 13.2159 14.6487 12.6801 14.7826C12.1443 14.9166 11.6014 14.5908 11.4674 14.055C11.321 13.4692 11.3005 12.7198 11.3508 11.9431C11.4024 11.1475 11.5336 10.2496 11.7341 9.33316C12.1309 7.5191 12.8223 5.52624 13.7929 4.07028C14.0993 3.61076 14.7202 3.48658 15.1797 3.79293Z"
      fill={Colors.Black[900]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.82375 7.53458C5.40419 8.4423 5.40442 8.44241 5.40466 8.44252L5.40653 8.44338L5.41001 8.44498L5.42032 8.44967L5.45407 8.46476C5.48229 8.47724 5.52183 8.49445 5.57172 8.51545C5.67143 8.55744 5.81301 8.61481 5.98869 8.68018C6.33877 8.81043 6.831 8.97491 7.40202 9.11197C8.50604 9.37697 10.0701 9.58096 11.472 9.06535C12.8954 8.54183 13.9545 7.37522 14.6216 6.45481C14.9656 5.98013 15.2302 5.53619 15.4092 5.21032C15.499 5.04679 15.5682 4.9114 15.6159 4.81474C15.6398 4.76637 15.6583 4.72758 15.6715 4.69967L15.6871 4.66609L15.6918 4.6557L15.6935 4.65216L15.6941 4.65081C15.6942 4.65055 15.6945 4.64974 14.7825 4.23967L15.6945 4.64974C15.9193 4.14974 15.6997 3.56196 15.2021 3.33195L14.7825 4.23967C15.2021 3.33195 15.2023 3.33206 15.2021 3.33195L15.1997 3.33087L15.1962 3.32928L15.1859 3.32459L15.1522 3.30949C15.124 3.29701 15.0844 3.2798 15.0345 3.2588C14.9348 3.21682 14.7932 3.15944 14.6175 3.09407C14.2675 2.96382 13.7752 2.79934 13.2042 2.66228C12.1002 2.39728 10.5362 2.19329 9.13421 2.70891C7.75379 3.21661 6.69442 4.38759 6.0231 5.30153C5.67486 5.77564 5.40267 6.22015 5.21718 6.54641C5.12409 6.71013 5.05196 6.84563 5.00216 6.94216C4.97724 6.99046 4.95786 7.02912 4.94418 7.0568L4.92794 7.08997L4.92307 7.10009L4.92144 7.10349L4.92083 7.10476C4.92072 7.105 4.92036 7.10575 5.82375 7.53458ZM7.27699 7.00558C7.45877 7.06113 7.65775 7.11655 7.86881 7.16721C8.85642 7.40426 9.94393 7.49638 10.7817 7.18827C11.6442 6.87104 12.413 6.09408 13.0022 5.28111C13.1297 5.10527 13.2444 4.93381 13.3456 4.77368C13.1594 4.71645 12.9548 4.65923 12.7374 4.60704C11.7498 4.36999 10.6623 4.27787 9.82457 4.58598C9.0116 4.88498 8.24315 5.65756 7.63499 6.48551C7.50271 6.66561 7.38299 6.84141 7.27699 7.00558ZM4.92036 7.10575L5.82375 7.53458L5.40466 8.44252C5.16231 8.3305 4.97434 8.126 4.88346 7.87495C4.79259 7.62391 4.80587 7.34694 4.92036 7.10575Z"
      fill={Colors.Black[900]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.625 14.375C12.761 14.375 11.25 15.886 11.25 17.75C11.25 19.6139 12.761 21.125 14.625 21.125C16.4889 21.125 18 19.6139 18 17.75C18 15.886 16.4889 14.375 14.625 14.375ZM9.25 17.75C9.25 14.7815 11.6565 12.375 14.625 12.375C17.5935 12.375 20 14.7815 20 17.75C20 20.7185 17.5935 23.125 14.625 23.125C11.6565 23.125 9.25 20.7185 9.25 17.75Z"
      fill={Colors.Blue[500]}
    />
  </Icon>
))
