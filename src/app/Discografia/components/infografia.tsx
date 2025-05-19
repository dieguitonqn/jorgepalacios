import React from 'react';
import { IInfografia } from '../types/infografia';

export const Infografia = ({description}:IInfografia) => {

    return(
        <div className="flex flex-col justify-center items-center border-l border-gray-200 dark:border-gray-700 pl-4">
                    <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
                        Inforgrafía
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {description}
                    </p>
                </div>
    )
}