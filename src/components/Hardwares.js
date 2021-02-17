import { useState } from 'react'
import Hardware from './Hardware'

const Hardwares = ({ gainRevenue, purchase }) => {
    const [hardwares, setHardwares] = useState(
        [
            {
                type: 'vaccuum_tube',
                name: 'Vaccuum Tube',
                initial_cost: 3.738,
                coefficient: 1.07,
                initial_time: 1.0,
                initial_revenue: 1.0,
                initial_storage: 1
            },
            {
                type: 'magnetic_core',
                name: 'Magnetic Core',
                initial_cost: 46.73,
                coefficient: 1.15,
                initial_time: 3.20,
                initial_revenue: 14.50,
                initial_storage: 128
            },
            {
                type: 'semiconductor',
                name: 'Semiconductor',
                initial_cost: 584.06,
                coefficient: 1.14,
                initial_time: 10.24,
                initial_revenue: 210.25,
                initial_storage: 16384
            },
            {
                type: 'magnetic_dict',
                name: 'Magnetic Disk',
                initial_cost: 7300.78,
                coefficient: 1.13,
                initial_time: 32.77,
                initial_revenue: 3048.63,
                initial_storage: 2097152
            },
            {
                type: 'optical_disk',
                name: 'Optical Disk',
                initial_cost: 91259.77,
                coefficient: 1.12,
                initial_time: 104.86,
                initial_revenue: 44205.06,
                initial_storage: 268435456
            },
            {
                type: 'flash_drive',
                name: 'Flash Drive',
                initial_cost: 1140747.07,
                coefficient: 1.11,
                initial_time: 335.54,
                initial_revenue: 640973.41,
                initial_storage: 34359738368
            },
            {
                type: 'solid_state_drive',
                name: 'Solid State Drive',
                initial_cost: 14259338.38,
                coefficient: 1.10,
                initial_time: 1073.74,
                initial_revenue: 9294114.39,
                initial_storage: 4398046511104
            },
            {
                type: 'data_silo',
                name: 'Data Silo',
                initial_cost: 178241729.74,
                coefficient: 1.09,
                initial_time: 3435.97,
                initial_revenue: 134764658.66,
                initial_storage: 562949953421312
            },
            {
                type: 'data_lake',
                name: 'Data Lake',
                initial_cost: 2228021621.70,
                coefficient: 1.08,
                initial_time: 10995.12,
                initial_revenue: 1954097550.63,
                initial_storage: 72057594037927900
            },
            {
                type: 'cloud_data',
                name: 'Cloud Data',
                initial_cost: 27850270271.30,
                coefficient: 1.07,
                initial_time: 35184.37,
                initial_revenue: 28334269484.12,
                initial_storage: 9223372036854780000
            }
        ]
    )

    return (
        <div className="hardwares">
            {hardwares.map((hardware) => (
                <Hardware key={hardware.type} hardware={hardware} gainRevenue={gainRevenue} purchase={purchase}/>
            ))}
        </div>
    )
}

export default Hardwares