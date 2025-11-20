import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsArtistCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_artist_cards';
  info: {
    displayName: 'Artist / Studio Card';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'USING SHEDDY'>;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.faq-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    section_subtitle: Schema.Attribute.Text;
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_items';
  info: {
    displayName: 'Feature Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeaturesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_grids';
  info: {
    displayName: 'Features Grid';
    icon: 'grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.feature-item', true>;
    primary_cta_label: Schema.Attribute.String;
    primary_cta_url: Schema.Attribute.String;
    section_subtitle: Schema.Attribute.Text;
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'heading';
  };
  attributes: {
    background_video: Schema.Attribute.Media<'videos'>;
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsLogoMarquee extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_marquees';
  info: {
    displayName: 'Logo / Artist Marquee';
    icon: 'media';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.artist-card', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    note: Schema.Attribute.String;
    section_subtitle: Schema.Attribute.Text;
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_plans';
  info: {
    displayName: 'Pricing Plan';
    icon: 'priceTag';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    details_link_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See details'>;
    details_link_url: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    highlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    includes_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Includes'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price_label: Schema.Attribute.String;
    price_subtitle: Schema.Attribute.String;
  };
}

export interface SectionsPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_sections';
  info: {
    displayName: 'Pricing Section';
    icon: 'money';
  };
  attributes: {
    footnote: Schema.Attribute.String;
    plans: Schema.Attribute.Component<'sections.pricing-plan', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    section_label: Schema.Attribute.String;
    section_subtitle: Schema.Attribute.Text;
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    author_role: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    icon: 'quote';
  };
  attributes: {
    highlight_quote: Schema.Attribute.Component<'sections.testimonial', false>;
    section_title: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'sections.testimonial', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.artist-card': SectionsArtistCard;
      'sections.faq-item': SectionsFaqItem;
      'sections.faq-section': SectionsFaqSection;
      'sections.feature-item': SectionsFeatureItem;
      'sections.features-grid': SectionsFeaturesGrid;
      'sections.hero': SectionsHero;
      'sections.logo-marquee': SectionsLogoMarquee;
      'sections.pricing-plan': SectionsPricingPlan;
      'sections.pricing-section': SectionsPricingSection;
      'sections.testimonial': SectionsTestimonial;
      'sections.testimonial-section': SectionsTestimonialSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
