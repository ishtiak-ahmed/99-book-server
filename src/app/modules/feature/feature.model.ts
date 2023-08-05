import { Schema, model } from 'mongoose';
import { IFeature } from './feature.interface';

const featureSchema = new Schema<IFeature>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Feature = model<IFeature>('Feature', featureSchema);
