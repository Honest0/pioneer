import React from 'react'

import { Colors } from '@/common/constants'

import { Icon, StyledIcon } from '../Icon'

export const CouncilorIcon = React.memo(({ className }: StyledIcon) => (
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
      d="M1.9001 7.79996C1.9001 7.19245 2.39258 6.69996 3.0001 6.69996C3.60761 6.69996 4.1001 7.19245 4.1001 7.79996C4.1001 8.40748 3.60761 8.89996 3.0001 8.89996C2.39258 8.89996 1.9001 8.40748 1.9001 7.79996ZM3.0001 4.89996C1.39847 4.89996 0.100098 6.19834 0.100098 7.79996C0.100098 8.76121 0.567772 9.61322 1.28799 10.1409C1.26543 10.1574 1.24411 10.1742 1.22405 10.1908C1.05605 10.3301 0.932942 10.4973 0.843774 10.6427C0.665113 10.9338 0.530586 11.2902 0.429939 11.6305C0.226946 12.3169 0.100098 13.153 0.100098 13.8H1.9001C1.9001 13.3424 1.99711 12.6784 2.15604 12.141C2.21168 11.9529 2.26762 11.8056 2.31689 11.7H3.6833C3.73258 11.8056 3.78852 11.9529 3.84415 12.141C4.00309 12.6784 4.1001 13.3424 4.1001 13.8H5.9001C5.9001 13.153 5.77325 12.3169 5.57026 11.6305C5.46961 11.2902 5.33508 10.9338 5.15642 10.6427C5.06725 10.4973 4.94414 10.3301 4.77615 10.1908C4.75609 10.1742 4.73476 10.1574 4.7122 10.1409C5.43242 9.61322 5.9001 8.76121 5.9001 7.79996C5.9001 6.19834 4.60172 4.89996 3.0001 4.89996ZM19.9001 7.79996C19.9001 7.19245 20.3926 6.69996 21.0001 6.69996C21.6076 6.69996 22.1001 7.19245 22.1001 7.79996C22.1001 8.40748 21.6076 8.89996 21.0001 8.89996C20.3926 8.89996 19.9001 8.40748 19.9001 7.79996ZM21.0001 4.89996C19.3985 4.89996 18.1001 6.19834 18.1001 7.79996C18.1001 8.76121 18.5678 9.61322 19.288 10.1409C19.2654 10.1574 19.2441 10.1742 19.224 10.1908C19.0561 10.3301 18.9329 10.4973 18.8438 10.6427C18.6651 10.9338 18.5306 11.2902 18.4299 11.6305C18.2269 12.3169 18.1001 13.153 18.1001 13.8H19.9001C19.9001 13.3424 19.9971 12.6784 20.156 12.141C20.2117 11.9529 20.2676 11.8056 20.3169 11.7H21.6833C21.7326 11.8056 21.7885 11.9529 21.8442 12.141C22.0031 12.6784 22.1001 13.3424 22.1001 13.8H23.9001C23.9001 13.153 23.7733 12.3169 23.5703 11.6305C23.4696 11.2902 23.3351 10.9338 23.1564 10.6427C23.0673 10.4973 22.9441 10.3301 22.7761 10.1908C22.7561 10.1742 22.7348 10.1574 22.7122 10.1409C23.4324 9.61322 23.9001 8.76121 23.9001 7.79996C23.9001 6.19834 22.6017 4.89996 21.0001 4.89996Z"
      fill={Colors.Black[900]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7384 10.8792L14.134 11.3575L14.8461 11.6524C16.0613 12.1558 16.9729 12.9762 17.6236 13.9234C18.6627 15.436 19.0015 17.2096 19.0015 18.3668V18.9331L18.495 19.1864C17.5611 19.6533 15.0686 20.5 12.0008 20.5C8.9329 20.5 6.44041 19.6533 5.50654 19.1864L5 18.9331V18.3668C5 17.2096 5.33879 15.436 6.37794 13.9234C7.0288 12.976 7.94061 12.1554 9.15628 11.6521L9.8684 11.3572L9.26403 10.8789C8.24138 10.0695 7.58657 8.81883 7.58657 7.41488C7.58657 4.97661 9.56318 3 12.0015 3C14.4397 3 16.4163 4.97661 16.4163 7.41488C16.4163 8.81903 15.7613 10.0699 14.7384 10.8792ZM6.92316 17.3984L6.85588 17.7815L7.22457 17.9056C8.26819 18.257 9.98335 18.6673 12.0008 18.6673C14.0182 18.6673 15.7333 18.257 16.777 17.9056L17.1456 17.7815L17.0784 17.3983C16.9455 16.642 16.652 15.7457 16.113 14.9611C15.3599 13.8648 14.1131 12.9551 12.0008 12.9551C9.88841 12.9551 8.64162 13.8648 7.8885 14.9611C7.34948 15.7457 7.05598 16.642 6.92316 17.3984ZM12.0015 9.99709C13.4276 9.99709 14.5837 8.841 14.5837 7.41488C14.5837 5.98877 13.4276 4.83267 12.0015 4.83267C10.5753 4.83267 9.41925 5.98877 9.41925 7.41488C9.41925 8.841 10.5753 9.99709 12.0015 9.99709Z"
      fill={Colors.Blue[800]}
    />
  </Icon>
))
