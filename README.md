# React Datepicker Component

This is a reusable React Datepicker Component that provides interfaces for users to customize how dates are outputted.

To get started, first install:

```bash
npm install
```

Then, run:

```bash
npm run dev
```

You can determine whether the Datepicker is for single selection or multiple selection through the type property, and customize your event within the onDateChange function.

```jsx
<Datepicker
  type={DatepickerType.Multiple}
  onDateChange={handleDateChange}
></Datepicker>
```
