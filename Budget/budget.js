const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    }
})

const Budget = mongoose.model('Budget', BudgetSchema)

module.exports = Budget;