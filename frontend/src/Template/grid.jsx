import React, { Component } from 'react'

export default class grid extends Component {
    cssClasses(numbers) {
        const values = numbers ? numbers.split(' ') : []
        let classes = ''

        if (values[0]) classes += `col-xs-${values[0]}`
        if (values[1]) classes += ` col-sm-${values[1]}`
        if (values[2]) classes += ` col-md-${values[2]}`
        if (values[3]) classes += ` col-lg-${values[3]}`

        return classes
    }

    render() {
        const gridClasses = this.cssClasses(this.props.numbers || 12);

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}