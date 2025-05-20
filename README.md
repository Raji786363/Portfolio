# Responsive Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. The content is managed through a JSON file, making it easy to update without touching the code.

## Features

- 🎨 Modern and elegant design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 📝 Content management through JSON
- 🔍 SEO friendly
- 📬 Contact form
- 📊 Skills visualization
- 📂 Project showcase
- 📅 Experience timeline
- 🎓 Education timeline
- 🔗 Social media integration

## Getting Started

1. Clone this repository
2. Add your images to the `images` folder:
   - Profile image: `images/profile.jpg`
   - Project images: `images/project1.jpg`, `images/project2.jpg`, etc.
3. Open `content.json` and update it with your information
4. Open `index.html` in your browser to view the portfolio

## Image Requirements

- Profile Image:
  - Recommended size: 400x400 pixels
  - Format: JPG or PNG
  - Place in: `images/profile.jpg`

- Project Images:
  - Recommended size: 1200x800 pixels
  - Format: JPG or PNG
  - Place in: `images/project1.jpg`, `images/project2.jpg`, etc.

## Customizing Content

All content is managed through the `content.json` file. Here's how to update different sections:

### Personal Information
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your Bio",
    "email": "your.email@example.com",
    "phone": "Your Phone",
    "location": "Your Location",
    "profileImage": "images/profile.jpg",
    "socialLinks": {
      "github": "Your GitHub URL",
      "linkedin": "Your LinkedIn URL",
      "twitter": "Your Twitter URL"
    }
  }
}
```

### Skills
```json
{
  "skills": [
    {
      "name": "Skill Name",
      "level": 90 // Percentage (0-100)
    }
  ]
}
```

### Projects
```json
{
  "projects": [
    {
      "title": "Project Title",
      "description": "Project Description",
      "image": "images/project1.jpg",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "liveLink": "Live Demo URL",
      "githubLink": "GitHub Repository URL"
    }
  ]
}
```

### Experience
```json
{
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "Duration",
      "description": "Job Description"
    }
  ]
}
```

### Education
```json
{
  "education": [
    {
      "degree": "Degree Name",
      "institution": "Institution Name",
      "period": "Duration",
      "description": "Description"
    }
  ]
}
```

## Customizing Styles

The website uses CSS variables for easy customization. You can modify the colors and other properties in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
